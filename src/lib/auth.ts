export type UserRole = "admin" | "user";

export type AuthUser = {
	id: string;
	username: string;
	role: UserRole;
	password: string; // demo-only storage
};

const USERS_KEY = "atech_users";
const CURRENT_USER_KEY = "atech_current_user";

function readUsers(): AuthUser[] {
	try {
		const raw = localStorage.getItem(USERS_KEY);
		return raw ? (JSON.parse(raw) as AuthUser[]) : [];
	} catch {
		return [];
	}
}

function writeUsers(users: AuthUser[]) {
	localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function seedDefaultAdmin() {
	const users = readUsers();
	if (!users.some(u => u.role === "admin")) {
		users.push({ id: crypto.randomUUID(), username: "admin", role: "admin", password: "Atech@12345" });
		writeUsers(users);
	}
}

export function getCurrentUser(): AuthUser | null {
	try {
		const raw = localStorage.getItem(CURRENT_USER_KEY);
		return raw ? (JSON.parse(raw) as AuthUser) : null;
	} catch {
		return null;
	}
}

export function setCurrentUser(user: AuthUser | null) {
	if (user) localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
	else localStorage.removeItem(CURRENT_USER_KEY);
}

export function signup(username: string, password: string): AuthUser {
	const users = readUsers();
	if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
		throw new Error("Username already exists");
	}
	const newUser: AuthUser = { id: crypto.randomUUID(), username, role: "user", password };
	users.push(newUser);
	writeUsers(users);
	setCurrentUser(newUser);
	return newUser;
}

export function login(username: string, password: string): AuthUser {
	const users = readUsers();
	const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
	if (!user) throw new Error("Invalid credentials");
	setCurrentUser(user);
	return user;
}

export function logout() {
	setCurrentUser(null);
}

export function isAdmin(user: AuthUser | null | undefined): boolean {
	return !!user && user.role === "admin";
}
