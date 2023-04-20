import { useState, useEffect } from 'react';
import axios from 'axios';

type UserDetails = {
  login: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  avatar_url:string;
  name:string;
  email:string;
  topStarRepo: any;
};

async function fetchUserDetails(username: string): Promise<UserDetails> {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  const {
    login,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    updated_at,
    avatar_url,
    name,
    email,
  } = response.data;
  const topStarRepo = await fetchTopStarRepository(username);

  return {
    login,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    updated_at,
    avatar_url,
    name,
    topStarRepo,
    email,
  };
}

async function fetchTopStarRepository(username: string) {
    const response = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}&sort=stargazers_count&order=desc&per_page=1`
      );
      return response.data.items[0];
  }

export function useTrendingUsers() {
  const [trendingUsers, setTrendingUsers] = useState<UserDetails[]>([]);

  useEffect(() => {
    async function fetchTrendingUsers() {
      try {
        const response = await axios.get(
          'https://api.github.com/search/users?q=followers:%3E1000&sort=followers&order=desc&per_page=3'
        );
        const users = response.data.items;

        const userDetailsPromises = users.map((user: { login: string }) =>
          fetchUserDetails(user.login)
        );
        const userDetails = await Promise.all(userDetailsPromises);

        setTrendingUsers(userDetails);
      } catch (error) {
        console.error('Error fetching trending users:', error);
      }
    }

    fetchTrendingUsers();
  }, []);

  return trendingUsers;
}
