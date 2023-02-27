export type ProjectSocialType = 'github' | 'npm' | 'link'
export interface ProjectSocial {
  type: ProjectSocialType
  href: string
}
