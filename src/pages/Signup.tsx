import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/hooks/use-auth';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
	const { signup } = useAuth();
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		try {
			await signup(username, password);
			navigate('/');
		} catch (err: any) {
			setError(err.message || 'Signup failed');
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<Card className="max-w-md w-full p-6 space-y-4">
				<h1 className="text-2xl font-bold">Sign Up</h1>
				{error && <div className="text-sm text-red-500">{error}</div>}
				<form className="space-y-4" onSubmit={onSubmit}>
					<div>
						<label className="block text-sm mb-1">Username</label>
						<Input value={username} onChange={(e) => setUsername(e.target.value)} required />
					</div>
					<div>
						<label className="block text-sm mb-1">Password</label>
						<Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
					</div>
					<Button type="submit" className="w-full">Create Account</Button>
				</form>
				<p className="text-sm text-muted-foreground">Have an account? <Link to="/login" className="text-primary">Login</Link></p>
			</Card>
		</div>
	);
};

export default Signup;
