import { useState, useEffect } from 'react';
import type { GitHubRepo, GitHubUser } from '../types/github';

interface UseGitHubResult {
  repos: GitHubRepo[];
  user: GitHubUser | null;
  loading: boolean;
  error: string | null;
}

export function useGitHubRepos(username: string): UseGitHubResult {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API request failed. Showing cached data.');
        }

        const userData: GitHubUser = await userRes.json();
        const reposData: GitHubRepo[] = await reposRes.json();

        setUser(userData);
        setRepos(reposData.filter((r) => !r.name.includes('cycber') && r.name !== 'dilhara2002-cyber.github.io' || r.name === 'dilhara2002-cyber.github.io'));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { repos, user, loading, error };
}
