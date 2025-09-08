export type HomeContent = {
	heroHeading1: string;
	heroHeading2: string;
	heroSubtitle: string;
	heroCtas: Array<{ label: string; href: string; variant?: "outline" | "default" }>;
	serviceIcons: Array<{ label: string; icon: "Code" | "Smartphone" | "Palette" | "Settings" }>;
	services: Array<{
		icon: "Code" | "Smartphone" | "Palette" | "Settings";
		title: string;
		description: string;
		features: string[];
		colorFrom: string;
		colorTo: string;
	}>;
};

export async function fetchHomeContent(signal?: AbortSignal): Promise<HomeContent> {
	const response = await fetch("/content/home.json", { signal, headers: { "cache-control": "no-cache" } });
	if (!response.ok) {
		throw new Error(`Failed to load home content: ${response.status}`);
	}
	return (await response.json()) as HomeContent;
}

export type Project = {
	title: string;
	slug: string;
	summary: string;
	cover?: string;
	tags?: string[];
	body?: string;
};

export type ProjectsList = {
	projects: Project[];
};

export async function fetchProjects(signal?: AbortSignal): Promise<ProjectsList> {
	const res = await fetch('/content/projects/list.json', { signal, headers: { 'cache-control': 'no-cache' } });
	if (!res.ok) throw new Error(`Failed to load projects: ${res.status}`);
	return (await res.json()) as ProjectsList;
}
