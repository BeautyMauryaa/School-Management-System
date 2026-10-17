# SchoolTouch — School Management System

This repository is the central entry point for the SchoolTouch school-management project collection.

## Projects

- **Static UI prototype (this repository root):** HTML, CSS, Bootstrap, and vanilla JavaScript pages for school roles and workflows.
- **Full-stack SchoolTouch:** `SchoolTouch-Fullstack/` — the MERN-based application with client and server.
- **CRUD practice version:** `SchoolTouch-CRUD/` — the focused CRUD version of SchoolTouch.

The two nested projects are included as Git submodules so their original repositories and commit histories remain intact. They are not copied into the root application, and they do not automatically share code or run as one application.

## Clone the full collection

Clone this repository and initialize the submodules:

```bash
git clone --recurse-submodules https://github.com/BeautyMauryaa/School-Management-System.git
cd School-Management-System
```

If you already cloned without submodules:

```bash
git submodule update --init --recursive
```

### Static UI prototype

Open `index.html` in a browser, or use VS Code Live Server.

### Full-stack SchoolTouch

```bash
cd SchoolTouch-Fullstack
```

Follow the full-stack setup instructions in `SchoolTouch-Fullstack/README.md`. It requires Node.js and a MongoDB instance.

### CRUD version

```bash
cd SchoolTouch-CRUD
```

Follow the instructions in that submodule's README.

## Important notes

- The static prototype, MERN application, and CRUD version are separate implementations. Features in one version should not be assumed to exist in another.
- This consolidation preserves the source repositories as submodules rather than copying files over each other or destroying their histories.
- Before calling the combined collection production-ready, run each project independently and verify its setup, authentication, API integrations, and persistence.

## Author

**Beauty Mauryaa** · [GitHub](https://github.com/BeautyMauryaa)
