# n8n Custom Node Template

This is a template repository for creating custom n8n nodes. It provides the basic structure and configuration needed to develop, test, and publish your own n8n community nodes.

## What's Included

This template includes:
- Basic node structure with example operations (GET, CREATE)
- Example credentials file for API authentication
- TypeScript configuration
- Package.json with n8n dependencies
- Icon file for the node
- Proper folder structure

## Project Structure

```
.
├── credentials/
│   └── ExampleCredentials.credentials.ts
├── nodes/
│   └── Example/
│       ├── Example.node.ts
│       └── example.svg
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- n8n installed (for testing)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/cafeasp/n8n-custom-node-template.git
cd n8n-custom-node-template
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

### Development

To develop your node with auto-recompilation on changes:

```bash
npm run dev
```

### Testing Your Node

To test your node in n8n:

1. Build your node:
```bash
npm run build
```

2. Link your node to n8n:
```bash
npm link
mkdir -p ~/.n8n/custom
cd ~/.n8n/custom
npm link n8n-nodes-custom
```

3. Restart n8n and your node should appear in the nodes panel

### Customization

1. **Update package.json**: Change the `name`, `description`, `author`, and `repository` fields
2. **Rename files**: Rename `Example.node.ts` and the credential file to match your integration
3. **Update the node**: Modify the node properties, operations, and logic in the `.node.ts` file
4. **Update credentials**: Adjust the credential properties to match your API requirements
5. **Replace icon**: Replace `example.svg` with your own icon
6. **Update n8n config**: Update the `n8n` section in package.json to reflect your renamed files

## Publishing

Before publishing to npm:

1. Update package.json with your package details
2. Ensure your package name starts with `n8n-nodes-`
3. Add `n8n-community-node-package` to keywords in package.json
4. Build the project: `npm run build`
5. Publish: `npm publish`

## Resources

- [n8n Documentation](https://docs.n8n.io)
- [Creating Nodes](https://docs.n8n.io/integrations/creating-nodes/)
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/)

## License

MIT
