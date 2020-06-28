/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchRepositories
// ====================================================

export interface FetchRepositories_viewer_organization_repositories_nodes_issues_nodes {
  __typename: "Issue";
  /**
   * Identifies the issue title.
   */
  title: string;
}

export interface FetchRepositories_viewer_organization_repositories_nodes_issues {
  __typename: "IssueConnection";
  /**
   * A list of nodes.
   */
  nodes: (FetchRepositories_viewer_organization_repositories_nodes_issues_nodes | null)[] | null;
}

export interface FetchRepositories_viewer_organization_repositories_nodes {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: GitHubDateTime;
  /**
   * A list of issues that have been opened in the repository.
   */
  issues: FetchRepositories_viewer_organization_repositories_nodes_issues;
}

export interface FetchRepositories_viewer_organization_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (FetchRepositories_viewer_organization_repositories_nodes | null)[] | null;
}

export interface FetchRepositories_viewer_organization {
  __typename: "Organization";
  /**
   * The organization's public profile name.
   */
  name: string | null;
  /**
   * A list of repositories that the user owns.
   */
  repositories: FetchRepositories_viewer_organization_repositories;
}

export interface FetchRepositories_viewer {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * Find an organization by its login that the user belongs to.
   */
  organization: FetchRepositories_viewer_organization | null;
}

export interface FetchRepositories {
  /**
   * The currently authenticated user.
   */
  viewer: FetchRepositories_viewer;
}

export interface FetchRepositoriesVariables {
  orgLogin: string;
}
