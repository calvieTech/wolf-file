
# Wolf File

A file management app with Express, Prisma, and Passport.js for session-based authentication. Users can create folders, upload files, view file details, and download files. File storage initially uses the filesystem via Multer, with cloud storage (Cloudinary or Supabase) for scalable access. File URLs are saved in the database for easy retrieval and remote access.


## Tech Stack

**Client:** React, Redux, Bootstrap, FontSource, Vite

**Server:** Node, Express, Prisma, pg


## Run Locally

Clone the project

```bash
  git clone https://github.com/calvieTech/wolf-file
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Features

- Light/dark mode toggle
- Upload files
- Download files
- Cloud storage
