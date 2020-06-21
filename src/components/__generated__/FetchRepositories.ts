/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchRepositories
// ====================================================

export interface FetchRepositories_viewer_repositories_nodes {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: GitHubDateTime;
}

export interface FetchRepositories_viewer_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (FetchRepositories_viewer_repositories_nodes | null)[] | null;
}

export interface FetchRepositories_viewer {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * A list of repositories that the user owns.
   */
  repositories: FetchRepositories_viewer_repositories;
}

export interface FetchRepositories {
  /**
   * The currently authenticated user.
   */
  viewer: FetchRepositories_viewer;
}

export interface FetchRepositoriesVariables {
  numberOfRepos: number;
}
