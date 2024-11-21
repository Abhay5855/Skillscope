
## Getting Started 

First, run the development server:

```bash
pnpm run dev
```

## Get Started 
1. Clone the repo using
 ```
git clone git@github.com:Abhay5855/Skillscope.git
```

2. Add Dependencies 
```
pnpm i
```

3. Run the server 
```
pnpm run dev
```
## Tech 
1. Frontend - Next JS
2. Backend - Python
3. Type Checking - Typescript
4. Icons - https://lucide.dev/guide/packages/lucide-react
5. For UI compoennts - https://headlessui.com/


## Pull Request Guidelines
A pull request's format should...

- Be titled with the Jira title and the Jira ticket in this format: [Jira-#] Description
  Example: [Isssue-123] Add Foobar Feature
- Have a good description based off our Pull Request template
- Hotfixes should have steps to reproduce the issue
- Features should have steps to present the feature 
- checklist of what it does / improves
- Have clear and descriptive git commit messages
- Have visual context changes if there's a frontend change (include before / after screenshots)
- Be tagged correctly (a database change should have Type: Database, a feature should have Type: Feature) etc.


## Folder Structure 
- app -> This is the main section where only route level component needs to be added.
- assets -> All the images or icons should be added inside the assets folder.
- components -> Any reusable component like Input, Button, Link, Dropdown shoule be added to the components folder.
- features -> feature level component should be added there, Use presentational and composition pattern to structure the Components.
- helpers -> Any logic like regex, validation check should be added in the helper file and export from there.
   
