import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

export class Example implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Example',
        name: 'example',
        icon: 'file:example.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Example node description',
        defaults: {
            name: 'Example',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'exampleCredentials',
                required: true,
            },
        ],
        requestDefaults: {
            baseURL: '={{$credentials.domain}}',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Example Resource',
                        value: 'exampleResource',
                    },
                ],
                default: 'exampleResource',
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['exampleResource'],
                    },
                },
                options: [
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get a resource',
                        action: 'Get a resource',
                    },
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create a resource',
                        action: 'Create a resource',
                    },
                ],
                default: 'get',
            },
            // Additional parameters would go here
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];

        // Your node logic goes here
        for (let i = 0; i < items.length; i++) {
            const resource = this.getNodeParameter('resource', i) as string;
            const operation = this.getNodeParameter('operation', i) as string;

            // Implement your operations here
            let responseData;

            if (resource === 'exampleResource') {
                if (operation === 'get') {
                    // GET operation logic
                    responseData = { message: 'GET operation placeholder' };
                } else if (operation === 'create') {
                    // CREATE operation logic
                    responseData = { message: 'CREATE operation placeholder' };
                }
            }

            returnData.push({
                json: responseData,
                pairedItem: { item: i },
            });
        }

        return [returnData];
    }
}
