/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RepositoryFragment
// ====================================================

export interface RepositoryFragment_issues_nodes {
  __typename: "Issue";
  /**
   * Identifies the issue title.
   */
  title: string;
}

export interface RepositoryFragment_issues {
  __typename: "IssueConnection";
  /**
   * A list of nodes.
   */
  nodes: (RepositoryFragment_issues_nodes | null)[] | null;
}

export interface RepositoryFragment {
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
  issues: RepositoryFragment_issues;
}
