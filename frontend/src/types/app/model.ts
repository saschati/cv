export type ProjectSocialType = 'github' | 'npm' | 'link' | 'linkedin'
export interface ProjectSocial {
  type: ProjectSocialType
  href: string
}
