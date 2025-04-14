---
title: Markdown Helpers
weight: 0
tags: ["markdown", "helpers"]
---

This section serves as a quick reference for users already familiar with Markdown, offering a reminder of its core syntax. Additionally, it describes the tools and extensions provided by this templater that enhance standard Markdown, allowing you to create more dynamic and engaging documentation.

## Cheat Sheet

````shell
## Text Formatting

_italic_
**bold**
~~strikethrough~~

## Headings

# Heading 1

## Heading 2

### Heading 3

## Bulleted Lists

- Item 1
- Item 2
- Item 3

## Numbered Lists

1. Item 1
2. Item 2
3. Item 3

## Links

[Link Text](URL)

## Images

![Alt Text](Image URL)

## Code Blocks

To create a code block in Docsy, use three backticks followed by the language identifier:

```python
print("Hello, World!")
```

## Inline Code

Use single backticks (`) to mark inline code.

## Tables

| Column 1  | Column 2  |
| --------- | --------- |
| Content 1 | Content 2 |
| Content 3 | Content 4 |

## Blockquotes

> This is a blockquote.

## Horizontal Lines

---

## Comments

<!-- This is a comment and will not be displayed. -->

## Escape Characters

Use the backslash (\) to escape special characters that are Markdown syntax characters.

## Docsy-Specific Extensions

Docsy provides additional features and extensions specifically designed for documentation with Docsy. Refer to the Docsy documentation for more information.
````

## Enhanced Guide: In-Depth Explanation

### Front Matter

The _front matter_ is the metadata attached to e.g. markdown files. It can be formatted in TOML, YAML or JSON — in these docs YAML is used. This should be continued for consistency.

Example:  
This is the front matter used in this article:

```yaml
---
title: Markdown Helpers
weight: 2
tags: ["contribution", "markdown", "helpers"]
---
```

[More details from hugo documentation](https://gohugo.io/content-management/front-matter/)

### Headings

Headings should be used to structure documents in semantically useful parts. The _primary heading_ is set by the [frontmatter]({{< ref "#front-matter" >}}) and should **not** be used inside the document.

#### Anchors

Headings generally create anchors that can be referenced as described in [link help]({{< ref "#link" >}}). Anchors are lowercase, spaces are replaced by `-` and if it is not unique suffixed by `-NUMBER` (`NUMBER` replaced of course).

If some heading should have a non-generated anchor it can be overwritten/specified by a special suffix like  
`## Heading 2 {#some-other-string}`or `## Headings 2 {id="something-different"}`

| Markdown               | Rendered Output            |
| ---------------------- | -------------------------- |
| # Heading level 1      | `<h1>Heading level 1</h1>` |
| ## Heading level 2     | `<h2>Heading level 2</h2>` |
| ### Heading level 3    | `<h3>Heading level 3</h3>` |
| #### Heading level 4   | `<h4>Heading level 4</h4>` |
| ##### Heading level 5  | `<h5>Heading level 5</h5>` |
| ###### Heading level 6 | `<h6>Heading level 6</h6>` |

### Tags

Just adopt the File header by `category` and a `tags` array to add them.

Example:

```yaml
---
title: "SEM - Playbooks"
description: "This documentation contains the SEM playbooks"
categories: ["Security"]
tags: ["Security management", "Security", "SEM", "Playbooks"]
---
```

An overiew can be found on the internal [tag page]({{< ref "tags" >}}).

Please consider to limit the ammount of labels.

### Blockquotes

Markdown uses `>` (greater than) characters for blockquoting.

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
> Aliquam hendrerit mi posuere lectus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

```markdown
> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
> Aliquam hendrerit mi posuere lectus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```

Blockquotes can be nested.

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
>
> > Aliquam hendrerit mi posuere lectus. Donec sit amet nisl.
>
> Suspendisse id sem consectetuer libero luctus adipiscing.

```markdown
> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
>
> > Aliquam hendrerit mi posuere lectus. Donec sit amet nisl.
>
> Suspendisse id sem consectetuer libero luctus adipiscing.
```

### Code Blocks

````md
This is a code block created by three backticks ("code fences") ``` - each on its own line.

It is also possible to use indentation by at least one tab (or 4 spaces).

This method with backticks is strongly preferred as it is much more explicit and less error prone than an indentation.
````

In Markdown this would look like this:

````text
```
This is a code block.
```
````

This is an example for `inline code`.

In Markdown this would look like this:

```markdown
This is an example for `inline code`.
```

#### Syntax Highlighting

Original documentation: <https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode>

To enable syntax highlighting the language of the block has to be specified.
Additionally various options can be added (see further down).

````markdown
```xml
<somthing></something>
```
````

> Options:
>
> - `linenos`: configure line numbers. Valid values are `true`, `false`, > `table`, or `inline`. `false` will turn off line numbers if it's configured > to be on in site config. `table` will give > copy-and-paste friendly code blocks.
> - `hl_lines`: lists a set of line numbers or line number ranges to be > highlighted.
> - `linenostart=199`: starts the line number count from 199.
> - `anchorlinenos`: Configure anchors on line numbers. Valid values are `true` > or `false`;
> - `lineanchors`: Configure a prefix for the anchors on line numbers. Will be > suffixed with `-`, so linking to the line number 1 with the option > `lineanchors=prefix` adds the anchor `prefix-1` to the page.

#### Highlighting in Code Fences

Highlighting in markdowns' code fences is also possible:

````text
```go {linenos=table,hl_lines=[2,4]}
// ... code
```
````

Creates:

```go {linenos=table,hl_lines=[2,4]}
// comment
// If an unknown or empty style is provided, AP style is what you get.
func GetTitleFunc(style string) func(s string) string {
  switch strings.ToLower(style) {
  case "go":
    return strings.Title
```

#### Highlighting with Shortcode

```text
{{</* highlight go "linenos=table,hl_lines=2 4" */>}}
// ... code
{{</* /highlight */>}}
```

{{< highlight go "linenos=table,hl\_lines=2 4" >}}
// comment
// If an unknown or empty style is provided, AP style is what you get.
func GetTitleFunc(style string) func(s string) string {
switch strings.ToLower(style) {
case "go":
return strings.Title
{{< /highlight >}}

#### Example of a Highlighted Code Block with Line Numbers, Highlighted Lines and highlighting dot

The following is an extensive example demonstrating various features. Line numbers are displayed, and lines 3, 4, 15, and 16 are highlighted to make two code snippets more visible. Additionally, the first snippet is marked with a dot to further enhance its visibility.

````text
```react {linenos=true,hl_lines=[3,4,15,16],linenostart=1}
// App.jsx
const App = (props = {}) => {
  {{</* label "danger" */>}}1{{</* /label */>}}
  useUrlState(props?.id || "doop") {{</* highlight-dot */>}}

  return (
    <MessagesProvider>
      <AppShell
        pageHeader={`Doop`}
        contentHeading={`Decentralized Observer of Policies  ${
          props.displayName ? ` - ${props.displayName}` : ""
        }`}
        embedded={props.embedded === true}
      >
      {{</* label "danger" */>}}2{{</* /label */>}}
      <AsyncWorker consumerId={props.id || "doop"} />
      [...]
      </AppShell>
    </MessagesProvider>
  )
}
```
````

Creates:

```react {linenos=true,hl_lines=[3,4,15,16],linenostart=1}
// App.jsx
const App = (props = {}) => {
  {{< label "danger" >}}1{{< /label >}}
  useUrlState(props?.id || "doop") {{< highlight-dot >}}

  return (
    <MessagesProvider>
      <AppShell
        pageHeader={`Doop`}
        contentHeading={`Decentralized Observer of Policies  ${
          props.displayName ? ` - ${props.displayName}` : ""
        }`}
        embedded={props.embedded === true}
      >
      {{< label "danger" >}}2{{< /label >}}
      <AsyncWorker consumerId={props.id || "doop"} />
      [...]
      </AppShell>
    </MessagesProvider>
  )
}
```

### Emphasis

- _single asterisks_
- **double asterisks**

In markdown:

```markdown
_single asterisks_
**double asterisks**
```

To produce a literal asterisk or underscore at a position where it would otherwise be used as an emphasis delimiter, you can backslash escape it.

### Diagram

**draw.io / diagrams.net**

To use diagrams created with `draw.io` you need to save the it in the `.drawio` format.

`File` -> `Save as` -> `Format: XML File (.drawio)`

After you have created your `.drawio` file you have to push it to the desired location.

Now to use the diagram you will have to include it in your document with the absolute path like this:

```tpl
{{</* diagramsnet file="source/help/diagram-drawio-example.drawio" */>}}
```

{{< diagramsnet file="content/contribution/diagram-drawio-example.drawio" >}}

### Hints

Create a color-coded box.

```tpl
{{</* hint [info|success|warning|danger|default|white] */>}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
 Ornateness bland it ex enc, est yeti am bongo detract re.
{{</* /hint */>}}
```

Examples:

{{< hint info >}}
**\*\*Info: Markdown content\*\***\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint success >}}
Success
{{< /hint >}}

{{< hint warning >}}
Warning
{{< /hint >}}

{{< hint danger >}}
Danger
{{< /hint >}}

{{< hint default >}}
Default
{{< /hint >}}

{{< hint white >}}
White
{{< /hint >}}

### Images

You can do it in different ways

#### 1. with `figure` (recommended)

```tpl
{{</* figure src="/help/monsoon_logo.png" title="This is the old Monsoon 3 logo!" */>}}
```

{{< hint warning >}}Don't add an empty `title=""` to a `{{ figure }}` if you dont provide a proper alt/subtext{{< /hint >}}
{{< hint info >}}If the pics are in a subfolder, just write `src="your-directory/monsoon_logo.png"`{{< /hint >}}

Further [examples and additional formatting options](https://gohugo.io/content-management/shortcodes/#figure) in the hugo documentation.

#### 2. Markdown

Alternative syntax is pur Markdown - which is not recommended as it

- is not properly styled
- does not show a caption for the image
- won't work inside lists and code blocks

```markdown
![Alt text which describes the used image if required](/monsoon_logo.png)
```

#### 3. Hugo Image Processing

[Hugo image processing.](https://gohugo.io/content-management/image-processing/)

Further [examples and other options](https://gohugo.io/content-management/shortcodes/#figure) in the hugo documentation.

### Labels / Badges

Create a color-coded inline box.

Add any of the below mentioned modifier classes to change the appearance of a label.

```tpl
{{</* label "success" */>}}example success{{</* /label */>}}

{{</* label "danger" */>}}example danger{{</* /label */>}}

{{</* label "warning" */>}}example warning{{</* /label */>}}

{{</* label "info" */>}}example info{{</* /label */>}}

{{</* label "dark" */>}}example dark{{</* /label */>}}
```

Examples:

{{< label "success" >}}example success{{< /label >}}

{{< label "danger" >}}example danger{{< /label >}}

{{< label "warning" >}}example warning{{< /label >}}

{{< label "info" >}}example info{{< /label >}}

{{< label "dark" >}}example dark{{< /label >}}

### Links

#### Link Markup

Markdown supports various link types, the most commonly is an _inline link_. Other more complex variants are explained in the [commonmark spec](https://spec.commonmark.org/0.29/#links).

##### Inline Links

This is an example inline link: [sap.com](https://www.sap.com)

```markdown
This is an example inline link: [sap.com](http://www.sap.cpm)
```

##### Anchors

If you want to jump to a specific heading on a page, you can reference [anchors]({{< ref "#headings" >}}).

This is [an example](#ref) reference-style link.

```markdown
This is [an example](#ref) reference-style link.
```

#### Internal Links

Internal links should be created with a special shortcode:

This is [a link]({{< relref "_index.md" >}}) inside the docs. The first argument is the filename that should be linked. Hugo will try to find the proper file+path by itself. If two files have the same name you have to specify the path as the pages will not be generated otherwise.

The file extension is not required.

```tpl
This is [a link]({{</* relref "front_matter.md" */>}}) inside the docs.
This is [a link]({{</* relref "install" */>}}) inside the docs which would not work as it is ambiguous.
This is [a link]({{</* relref "/docs/install/manila/deployment" */>}}) inside the docs with full path to the document.
```

### Lists

Markdown supports ordered (numbered) and unordered (bulleted) lists.

{{< hint warning >}}Don't add empty lines inside a list or it will create a new list for each point{{< /hint >}}

#### Unordered List

- 1st item
- 2nd item
  - 1st sub-item of 2nd item
- 3rd item

```markdown
- 1st item
- 2nd item
  - 1st sub-item of 2nd item
- 3rd item
```

#### Ordered List

1. 1st item
2. 2nd item
3. 3rd item

```markdown
1. 1st item
1. 2nd item
1. 3rd item
```

Notice the actual value of the number doesn't matter in the list result. However, using the proper number improves readability.

#### Combined List

- Item 1
- Item 2
  1. Subitem 1
  2. Subitem 2
- Item 3

```markdown
- Item 1
- Item 2
  1. Subitem 1
  1. Subitem 2
- Item 3
```

### Paragraphs

A paragraph is one or more consecutive lines of text separated by one or more blank lines.

This is the first paragraph.

This is the second paragraph.

```markdown
This is the first paragraph.

This is the second paragraph.
```

### Tables

```markdown
| State     | Description                     |
| --------- | ------------------------------- |
| Queued    | Lorem ipsum dolor sit amet, ... |
| Executing | Lorem ipsum dolor sit amet, ... |
| Failed    | Lorem ipsum dolor sit amet, ... |
| Complete  | Lorem ipsum dolor sit amet, ... |
```

| State     | Description                     |
| --------- | ------------------------------- |
| Queued    | Lorem ipsum dolor sit amet, ... |
| Executing | Lorem ipsum dolor sit amet, ... |
| Failed    | Lorem ipsum dolor sit amet, ... |
| Complete  | Lorem ipsum dolor sit amet, ... |

For more complex tables (e.g. multiple paragraphs in one cell) you will have to use HTML markup in your Markdown document.

### Diagrams

#### Mermaid

Original documentation: <https://geekdocs.de/shortcodes/mermaid/>

Live Editor to test diagrams: <https://mermaid-js.github.io/mermaid-live-editor>

````tpl
```mermaid
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
```
````

```mermaid
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
```

#### Nomnoml

Nomnoml is a tool to draw UML diagrams based on a simple syntax. Further details can be obtained at <https://www.nomnoml.com/> or the [github repo](https://github.com/skanaar/nomnoml).

Example:

````tpl
```nomnoml
[Pirate|eyeCount: Int|raid();pillage()|
 [beard]--[parrot]
 [beard]-:>[foul mouth]
]
[<abstract>Marauder]<:--[Pirate]
[Pirate]- 0..7[mischief]
[jollyness]->[plunder]
[jollyness]->[rum]
[jollyness]->[singing]
[Pirate]-> *[rum|tastiness: Int|swig()]
[Pirate]->[singing]
[singing]<->[rum]
[<start>st]->[<state>plunder]
[plunder]->[<choice>more loot]
[more loot]->[st]
[more loot] no ->[<end>e]
[<actor>Sailor] - [<usecase>shiver me;timbers]
```
````

```nomnoml
[Pirate|eyeCount: Int|raid();pillage()|
 [beard]--[parrot]
 [beard]-:>[foul mouth]
]
[<abstract>Marauder]<:--[Pirate]
[Pirate]- 0..7[mischief]
[jollyness]->[plunder]
[jollyness]->[rum]
[jollyness]->[singing]
[Pirate]-> *[rum|tastiness: Int|swig()]
[Pirate]->[singing]
[singing]<->[rum]
[<start>st]->[<state>plunder]
[plunder]->[<choice>more loot]
[more loot]->[st]
[more loot] no ->[<end>e]
[<actor>Sailor] - [<usecase>shiver me;timbers]
```

#### BPMN

`bpmn-js` is a library for rendering and interacting with BPMN 2.0 diagrams directly in the browser. Further details can be found at https://bpmn.io/toolkit/bpmn-js/ or the GitHub repository.

**Inline**

```bpmn
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" targetNamespace="" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
  <collaboration id="sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424">
    <participant id="sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F" name="Customer" processRef="sid-C3803939-0872-457F-8336-EAE484DC4A04" />
  </collaboration>
  <process id="sid-C3803939-0872-457F-8336-EAE484DC4A04" name="Customer" processType="None" isClosed="false" isExecutable="false">
    <extensionElements />
    <laneSet id="sid-b167d0d7-e761-4636-9200-76b7f0e8e83a">
      <lane id="sid-57E4FE0D-18E4-478D-BC5D-B15164E93254">
        <flowNodeRef>sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26</flowNodeRef>
        <flowNodeRef>sid-E49425CF-8287-4798-B622-D2A7D78EF00B</flowNodeRef>
        <flowNodeRef>sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138</flowNodeRef>
        <flowNodeRef>sid-E433566C-2289-4BEB-A19C-1697048900D2</flowNodeRef>
        <flowNodeRef>sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9</flowNodeRef>
        <flowNodeRef>SCAN_OK</flowNodeRef>
      </lane>
    </laneSet>
    <task id="sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26" name="Scan QR code">
      <incoming>sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D</incoming>
      <outgoing>sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A</outgoing>
    </task>
    <task id="sid-E49425CF-8287-4798-B622-D2A7D78EF00B" name="Open product information in mobile  app">
      <incoming>sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB</incoming>
      <outgoing>sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C</outgoing>
    </task>
    <startEvent id="sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138" name="Notices&#10;QR code">
      <outgoing>sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD</outgoing>
    </startEvent>
    <endEvent id="sid-E433566C-2289-4BEB-A19C-1697048900D2" name="Is informed">
      <incoming>sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C</incoming>
    </endEvent>
    <exclusiveGateway id="sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9">
      <incoming>sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD</incoming>
      <incoming>sid-337A23B9-A923-4CCE-B613-3E247B773CCE</incoming>
      <outgoing>sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D</outgoing>
    </exclusiveGateway>
    <exclusiveGateway id="SCAN_OK" name="Scan successful?&#10;">
      <incoming>sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A</incoming>
      <outgoing>sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB</outgoing>
      <outgoing>sid-337A23B9-A923-4CCE-B613-3E247B773CCE</outgoing>
    </exclusiveGateway>
    <sequenceFlow id="sid-337A23B9-A923-4CCE-B613-3E247B773CCE" name="Yes" sourceRef="SCAN_OK" targetRef="sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9" />
    <sequenceFlow id="sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D" sourceRef="sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9" targetRef="sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26" />
    <sequenceFlow id="sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB" name="No" sourceRef="SCAN_OK" targetRef="sid-E49425CF-8287-4798-B622-D2A7D78EF00B" />
    <sequenceFlow id="sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C" sourceRef="sid-E49425CF-8287-4798-B622-D2A7D78EF00B" targetRef="sid-E433566C-2289-4BEB-A19C-1697048900D2" />
    <sequenceFlow id="sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A" sourceRef="sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26" targetRef="SCAN_OK" />
    <sequenceFlow id="sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD" sourceRef="sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138" targetRef="sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9" />
  </process>
  <bpmndi:BPMNDiagram id="sid-74620812-92c4-44e5-949c-aa47393d3830">
    <bpmndi:BPMNPlane id="sid-cdcae759-2af7-4a6d-bd02-53f3352a731d" bpmnElement="sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424">
      <bpmndi:BPMNShape id="sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F_gui" bpmnElement="sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F" isHorizontal="true">
        <omgdc:Bounds x="83" y="105" width="933" height="250" />
        <bpmndi:BPMNLabel labelStyle="sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b">
          <omgdc:Bounds x="47.49999999999999" y="170.42857360839844" width="12.000000000000014" height="59.142852783203125" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-57E4FE0D-18E4-478D-BC5D-B15164E93254_gui" bpmnElement="sid-57E4FE0D-18E4-478D-BC5D-B15164E93254" isHorizontal="true">
        <omgdc:Bounds x="113" y="105" width="903" height="250" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26_gui" bpmnElement="sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26">
        <omgdc:Bounds x="393" y="170" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b">
          <omgdc:Bounds x="360.5" y="172" width="84" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-E49425CF-8287-4798-B622-D2A7D78EF00B_gui" bpmnElement="sid-E49425CF-8287-4798-B622-D2A7D78EF00B">
        <omgdc:Bounds x="728" y="170" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b">
          <omgdc:Bounds x="695.9285736083984" y="162" width="83.14285278320312" height="36" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A_gui" bpmnElement="sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A">
        <omgdi:waypoint x="493" y="210" />
        <omgdi:waypoint x="585" y="210" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="494" y="185" width="90" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB_gui" bpmnElement="sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB">
        <omgdi:waypoint x="635" y="210" />
        <omgdi:waypoint x="728" y="210" />
        <bpmndi:BPMNLabel labelStyle="sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581">
          <omgdc:Bounds x="642" y="185" width="16" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD_gui" bpmnElement="sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD">
        <omgdi:waypoint x="223" y="210" />
        <omgdi:waypoint x="275" y="210" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="204" y="185" width="90" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D_gui" bpmnElement="sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D">
        <omgdi:waypoint x="325" y="210" />
        <omgdi:waypoint x="393" y="210" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="314" y="185" width="90" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C_gui" bpmnElement="sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C">
        <omgdi:waypoint x="828" y="210" />
        <omgdi:waypoint x="901" y="210" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="820" y="185" width="90" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-337A23B9-A923-4CCE-B613-3E247B773CCE_gui" bpmnElement="sid-337A23B9-A923-4CCE-B613-3E247B773CCE">
        <omgdi:waypoint x="611" y="234" />
        <omgdi:waypoint x="610.5" y="299" />
        <omgdi:waypoint x="300.5" y="299" />
        <omgdi:waypoint x="301" y="234" />
        <bpmndi:BPMNLabel labelStyle="sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581">
          <omgdc:Bounds x="585" y="236" width="21" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="StartEvent_0l6sgn0_di" bpmnElement="sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138">
        <omgdc:Bounds x="187" y="192" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="182" y="229" width="46" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_0xwuvv5_di" bpmnElement="sid-E433566C-2289-4BEB-A19C-1697048900D2">
        <omgdc:Bounds x="901" y="192" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="892" y="231" width="56" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_1g0eih2_di" bpmnElement="sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9" isMarkerVisible="true">
        <omgdc:Bounds x="275" y="185" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="210" y="160" width="90" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_0vci1x5_di" bpmnElement="SCAN_OK" isMarkerVisible="true">
        <omgdc:Bounds x="585" y="185" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="568" y="157" width="88" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581">
      <omgdc:Font name="Arial" size="11" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
    <bpmndi:BPMNLabelStyle id="sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
</definitions>
```

**Reference**

{{< bpmn "../Idea_Process_to_manage_documentation_in_GCID_PlusOne.bpmn" />}}
