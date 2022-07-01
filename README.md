# Welcome to the Hugo documentation templater

This guide shows you how to use this templater to create a Converged Cloud technical documentation site.

## Create a new documentation site from scratch

### Install Hugo extended version

Prerequisite: Golang

#### Mac users

```
brew install golang
brew install hugo
```

To verify your new install:

```
hugo version
```

### Create a Hugo site

```
hugo new site my-docu-site
cd  my-docu-site
```

### Turn your site into a Hugo Module

```
hugo mod init github.com/sapcc/my-docu-site
```

### Declare the hugo-documentation-templater module as a dependency for your site

Normally you would add the sapcc docs templater (hugo-documentation-templater) module as following:

```
hugo mod get github.com/sapcc/hugo-documentation-templater@v1.0.0
```

But if you are developing this module add the following config to the go.mod file and it will redirect to your local folder:

```go.mod
module github.com/me/my-docu-site

// just for local dev add this line (adjust to your folder location)!
replace github.com/sapcc/hugo-documentation-templater => /Users/d063222/Documents/sap/monsoon/hugo-documentation-templater

go 1.17

require github.com/sapcc/hugo-documentation-templater v1.0.0 // indirect
```

### Edit the Hugo config file `config.yaml` (originally is `config.toml` but I prefer yaml) as following to import the templater:

```yaml
baseURL: "http://example.org/"
languageCode: "en-us"
title: "My New SAP CC Doc Site"

params:
  # change this url to the one of your project to enable 'View page source', 'Edit this page' and 'Create documentation issue' links on the right side navigation
  github_repo: "https://github.com/sapcc/your-repo-pointing-to-the-documentation"

menu:
  # uncomment this section to add custom links to the top navigation
  # main:
  #   - identifier: "Github"
  #     name: "Github"
  #     pre: "<i class='fab fa-github'></i>"
  #     url: "https://github.com/sapcc/your-repo-pointing-to-the-documentation"
  #     weight: 0

module:
  hugoVersion:
    extended: true
    min: 0.73.0
  imports:
    - path: github.com/sapcc/hugo-documentation-templater
      disable: false
```

### Start Hugo Server

```
hugo server --disableFastRender
```

The `--disableFastRender` option ensures that nothing is cached.

## Content and Customization

### Site name

Edit the name attribute on the Hugo config file `config.yaml`.

### Add Non-content Entries to a Menu

Add a menu configuration similar to the following in the `config.yaml` (see [Hugo documentation](https://gohugo.io/content-management/menus/)):

```yaml
menu:
  main:
    - identifier: "Github"
      name: "Github"
      pre: "<i class='fab fa-github'></i>"
      url: "https://github.com/sapcc/your-repo-pointing-to-the-documentation"
      weight: 0
```

### Landing page

#### Customize hero section

Add a file named `_index.md` to the root of content folder with following content to customize the landing page:

```markdown
---
heroTitle: "The best documentation ever"
heroSubtitle: "This is the subtitle of the hero section"
---
```

#### Configure the number of entries in the modified section in the landing page

In the landing page will be shown per default a section with the last 5 modified files of the content as they are committed in github. To modify the number of modified files shown in the section add following configuration to the `config.yaml`:

```yaml
params:
  # number of entries in the modified section in the landing page. Default is 5
  modifiedEntries: 10
```

#### Add custom section index to jump to specific documentation sections in the landing page

Add this parameter `landingSectionIndex: true` to the `_index.md` file of the desired section or markdown file.

Example:
Given an architecture folder with the section definition file `content/docs/architecture/_index.md` with parameter `landingSectionIndex: true` as following:

```markdown
---
title: "Architecture"
linkTitle: "Architecture"
weight: 1
landingSectionIndex: true
description: >
  Architecture overview
---
```

A new entry will be created in the section at the bottom of the landing page with links and descriptions to jump directly to the desired sections.

#### Create an own landing page content template

1. Create a file with the landing page content (`landing-page-new-content.html`) and save it in the `partials` folder.
2. The content will be automatically added between the <main> tags in the landing page.

```html
<main>{{/* your own content here coming from the partial */}}</main>
```

3. Reference the landing page content file in the configuration file `config.yaml`

```yaml
params:
  # landing page content template
  landingPageContentTemplateName: "landing-page-new-content"
```

### Documentation

#### Content

Just drop your documentation well organized in folders under `content/docs/`. Each folder should contain a `_index.md` file containing following information:

```markdown
---
title: "Main title of the section"
linkTitle: "Name on the side navigation"
weight: "integer number describing the position in the side bar"
description: >
  "Some description useful"
---
```

#### Search

Search engine and field in the top navigation bar is setup per default. Search field on the right side navigation is per default disabled.

## Extra information

### Bootstrap version

Based on Bootstrap 4.6

### Buil assets

Creating a new package.json file
https://docs.npmjs.com/creating-a-package-json-file

```
npm init
```

Install PostCSS so that the site build can create the final CSS assets
https://github.com/google/docsy#prerequisites

```
npm install --save-dev autoprefixer
npm install --save-dev postcss-cli
```

### Git Information

https://www.dinofizzotti.com/blog/2017-05-01-adding-hugo-version-and-commit-information-to-a-status-page/
https://sizeof.cat/post/git-info-on-a-hugo-static-website/
