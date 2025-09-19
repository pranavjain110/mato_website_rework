# GitHub Issue Templates for Copilot Assignment

This document provides templates for creating actual GitHub issues based on the breakdown in `GITHUB_ISSUES_BREAKDOWN.md`.

## Issue Template Format

```markdown
**Title:** [Issue Title from Breakdown]

**Labels:** `enhancement`, `react`, `frontend`, `priority-[high/medium/low]`

**Assignee:** @copilot

**Description:**
[Description from breakdown]

**Acceptance Criteria:**
[Copy acceptance criteria from breakdown - use checkboxes]

**Technical Requirements:**
[Copy technical requirements from breakdown]

**Related Issues:**
- Depends on: #[issue_number] (if applicable)
- Blocks: #[issue_number] (if applicable)

**Definition of Done:**
- [ ] All acceptance criteria met
- [ ] Code follows project style guidelines  
- [ ] Responsive design verified on mobile and desktop
- [ ] No console errors or warnings
- [ ] Changes tested manually
- [ ] PR created and reviewed

**Estimated Time:** [X hours from breakdown]
```

## Quick Issue Creation Commands

For easy copy-paste when creating GitHub issues:

### Issue #1: Project Foundation
```
**Title:** Setup React Router and basic project structure

**Labels:** `enhancement`, `react`, `frontend`, `priority-high`, `foundation`

**Description:**
Set up the foundational structure for the Mato Industries website including routing and basic layout components.

**Acceptance Criteria:**
- [ ] Install and configure React Router for navigation between pages
- [ ] Create basic folder structure for components, pages, and assets
- [ ] Set up a main layout component with header/footer structure
- [ ] Create placeholder pages for all 6 main pages (Home, About, Infrastructure, Products, Contact, FAQ)
- [ ] Implement basic navigation menu in header
- [ ] Ensure routing works correctly between all pages
- [ ] Add basic error boundary for better error handling

**Technical Requirements:**
- Use React Router v6
- Follow component-based architecture
- Implement responsive navigation (mobile-friendly)

**Estimated Time:** 1-2 hours
```

### Issue #2: Design System
```
**Title:** Create design system and reusable UI components

**Labels:** `enhancement`, `react`, `frontend`, `priority-high`, `design-system`

**Description:**
Establish a consistent design system and create reusable components that will be used across the website.

**Acceptance Criteria:**
- [ ] Define color palette suitable for industrial/manufacturing company
- [ ] Create Typography system using Tailwind CSS classes
- [ ] Build reusable Button component with variants (primary, secondary, outline)
- [ ] Create Card component for content sections
- [ ] Build Section wrapper component for consistent spacing
- [ ] Create responsive Grid/Layout components
- [ ] Implement Icon system (FontAwesome or similar)
- [ ] Add hover effects and transitions for better UX

**Technical Requirements:**
- Use Tailwind CSS for styling
- Create component library in `/src/components/ui/`
- Ensure all components are responsive
- Add prop validation with PropTypes

**Related Issues:**
- Blocks: All page development issues (#3-8)

**Estimated Time:** 2-3 hours
```

### Issue #3: Home Page
```
**Title:** Build Home Page with hero section and key information

**Labels:** `enhancement`, `react`, `frontend`, `priority-high`, `home-page`

**Description:**
Create the main landing page that showcases Mato Industries' expertise and serves as the entry point for visitors.

**Acceptance Criteria:**
- [ ] Build hero section with bold headline ("Leaders in Quality Machining and Casting")
- [ ] Add brief introduction about key products (Bronze Bushings, Thrust Washers, Copper Alloys)
- [ ] Implement call-to-action button ("Explore Our Products") that navigates to Products page
- [ ] Create three main sections: Expertise overview, Products preview, Contact info preview
- [ ] Add company highlights (ISO-9001 certified, quality processes)
- [ ] Make entire page responsive for mobile and desktop
- [ ] Optimize loading performance

**Technical Requirements:**
- Modern, professional appearance
- Use established color scheme
- Include subtle animations/transitions
- Ensure visual hierarchy with cards and shadows

**Related Issues:**
- Depends on: #1 (Foundation), #2 (Design System)

**Estimated Time:** 3-4 hours
```

## Priority and Dependency Matrix

| Issue | Priority | Depends On | Blocks | Estimated Hours |
|-------|----------|------------|---------|-----------------|
| #1 Foundation | High | - | #2-11 | 1-2 |
| #2 Design System | High | #1 | #3-8 | 2-3 |
| #3 Home Page | High | #1, #2 | - | 3-4 |
| #4 About Page | Medium | #1, #2 | - | 2-3 |
| #5 Infrastructure | Medium | #1, #2 | - | 3-4 |
| #6 Products | Medium | #1, #2 | - | 2-3 |
| #7 Contact | Medium | #1, #2 | - | 2-3 |
| #8 FAQ | Low | #1, #2 | - | 1-2 |
| #9 Performance | Medium | #3-8 | - | 2-3 |
| #10 Mobile/A11y | High | #3-8 | - | 2-3 |
| #11 Documentation | Low | All | - | 1-2 |

## Labels to Create in GitHub

- `priority-high` (red)
- `priority-medium` (yellow)  
- `priority-low` (blue)
- `foundation` (purple)
- `design-system` (purple)
- `home-page` (green)
- `about-page` (green)
- `infrastructure-page` (green)
- `products-page` (green)
- `contact-page` (green)
- `faq-page` (green)
- `performance` (orange)
- `accessibility` (orange)
- `mobile` (orange)
- `documentation` (gray)

## Workflow Recommendations

1. **Create Issues in Batches:**
   - Create issues #1-2 first (Foundation)
   - Create issues #3-8 after foundation is complete
   - Create issues #9-11 for final polish

2. **Assignment Strategy:**
   - Assign foundation issues to experienced developers or leads
   - Page development issues can be distributed among team members
   - Performance and accessibility issues require specific expertise

3. **Review Process:**
   - Each issue should have a PR review before merging
   - Foundation and design system changes require thorough review
   - Page implementations can have faster review cycles

4. **Testing Strategy:**
   - Manual testing required for each page
   - Cross-browser testing for key pages (Home, Products, Contact)
   - Mobile testing throughout development

This template structure ensures consistent issue creation and helps track progress effectively across the entire website development project.