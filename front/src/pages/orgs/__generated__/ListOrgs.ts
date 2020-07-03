/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListOrgs
// ====================================================

export interface ListOrgs_viewer_organizations_nodes {
  __typename: "Organization";
  id: string;
  /**
   * The organization's public profile name.
   */
  name: string | null;
  /**
   * The HTTP path for this organization.
   */
  resourcePath: GitHubURI;
}

export interface ListOrgs_viewer_organizations {
  __typename: "OrganizationConnection";
  /**
   * A list of nodes.
   */
  nodes: (ListOrgs_viewer_organizations_nodes | null)[] | null;
}

export interface ListOrgs_viewer {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A list of organizations the user belongs to.
   */
  organizations: ListOrgs_viewer_organizations;
}

export interface ListOrgs {
  /**
   * The currently authenticated user.
   */
  viewer: ListOrgs_viewer;
}
