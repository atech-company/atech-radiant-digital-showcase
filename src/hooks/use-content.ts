import { useQuery } from "@tanstack/react-query";
import { fetchHomeContent, HomeContent, fetchProjects, ProjectsList } from "@/lib/content";

export function useHomeContent() {
	return useQuery<HomeContent, Error>({
		queryKey: ["home-content"],
		queryFn: ({ signal }) => fetchHomeContent(signal),
		staleTime: 5 * 60 * 1000,
		gcTime: 30 * 60 * 1000,
	});
}

export function useProjectsList() {
	return useQuery<ProjectsList, Error>({
		queryKey: ["projects-list"],
		queryFn: ({ signal }) => fetchProjects(signal),
		staleTime: 60 * 1000,
		gcTime: 10 * 60 * 1000,
	});
}
