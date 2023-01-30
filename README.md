Bom Português is a simple and didactic Question & Answer game to practice tricky portuguese words and expressions. it also includes a list of unusual words, so the user can increase the portuguese vocabulary. It was developed using Next, TypeScript and Styled Components.
This game can be played anytime and anywhere due to is offline capability, and inPortuguese and English.

This project displays content from [Infopédia](https://www.infopedia.pt) and [Em Português Correto](https://emportuguescorreto.pt). The content was scrapped using cypress.

![Group 738](https://user-images.githubusercontent.com/43031902/198909421-32086ca7-f2cd-4a79-b271-4149d90389cb.png)

Play it [here](https://bom-portugues.vercel.app/).

## Get Start

- Add file `src/content/all-questions.json` with the following structure:
  ```json
  [
    {
      "id": "string",
      "title": "string",
      "options": "string[]",
      "correctOption": "string",
      "answer": "string",
      "source": "string",
      "link": "string"
    }
  ]
  ```
- Add file `src/content/all-unusual-words.json` with the following structure:
  ```json
  [
    {
      "id": "string",
      "word": "string",
      "pronunciation": "string[]",
      "definition": "string",
      "sentence": "string",
      "source": "string",
      "link": "string"
    }
  ]
  ```

## Available Scripts

### `yarn install`

Installs all the dependencies required to run and develop this application.

### `yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### `yarn build`

Build a production-ready application.

### `yarn start`

Runs the production build locally

### `yarn export`

Converts Next project into a static website

### `yarn lint`

Runs linter in the project
