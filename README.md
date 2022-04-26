## Create your new skeleton project

```
hugo new site my-docu-site
cd  my-docu-site
```

## To turn your site into a Hugo Module

```
  hugo mod init github.com/cc/my-docu-site
```

## Next declare the hugo-documentation-templater module as a dependency for your site

Normally you would add the module as following:

```
hugo mod get hugo-documentation-templater
```

But since it is stil in dev add the following config to the go.mod file:

```
module github.com/me/my-docu-site

// just for local dev!
replace github.wdf.sap.corp/cc/hugo-documentation-templater => /Users/d063222/Documents/sap/monsoon/hugo-documentation-templater

go 1.17

require github.wdf.sap.corp/cc/hugo-documentation-templater v0.0.0-somegiberish // indirect
```

## Edit the Hugo config file as following:

```
baseURL: "http://example.org/"
languageCode: "en-us"
title: "My New SAP CC Doc Site"

module:
  hugoVersion:
    extended: true
    min: 0.73.0
  imports:
    - path: github.wdf.sap.corp/cc/hugo-documentation-templater
      disable: false
```
