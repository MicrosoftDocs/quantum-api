---
title: '%azure.connect (magic command)'
description: Connects to an Azure Quantum workspace or displays current connection
  status.
author: anjbur
uid: microsoft.quantum.iqsharp.magic-ref.azure.connect
ms.author: anburton
ms.date: 04/21/2022
ms.topic: managed-reference
---

<!--
    NB: This file has been automatically generated from Microsoft.Quantum.IQSharp.AzureClient.dll,
        please do not manually edit it.

    [DEBUG] JSON source:
        {"Name": "%azure.connect", "Documentation": {"Summary": "Connects to an Azure Quantum workspace or displays current connection status.", "Full": null, "Description": "\r\nThis magic command allows for connecting to an Azure Quantum workspace\r\nas specified by the resource ID and location of the workspace or by a combination of\r\nsubscription ID, resource group name, workspace name, and location.\r\n\r\nIf the connection is successful, a list of the available Q# execution targets\r\nin the Azure Quantum workspace will be displayed.\r\n\r\n#### Required parameters\r\n\r\nThe Azure Quantum workspace can be identified by resource ID:\r\n\r\n- `resourceId=<string>`: The resource ID of the Azure Quantum workspace.\r\nThis can be obtained from the workspace page in the Azure portal. The `resourceId=` prefix\r\nis optional for this parameter, as long as the resource ID is valid.\r\n\r\nAlternatively, it can be identified by subscription ID, resource group name, and workspace name:\r\n\r\n- `subscription=<string>`: The Azure subscription ID for the Azure Quantum workspace.\r\n- `resourceGroup=<string>`: The Azure resource group name for the Azure Quantum workspace.\r\n- `workspace=<string>`: The name of the Azure Quantum workspace.\r\n\r\nAlong with the identifiers above, a valid location is required.\r\n\r\n- `location=<string>`: The Azure region where the Azure Quantum workspace is provisioned.\r\nThis may be specified as a region name such as `\"East US\"` or a location name such as `\"eastus\"`.\r\n\r\n#### Optional parameters\r\n\r\n- `storage=<string>`: The connection string to the Azure storage\r\naccount. Required if the specified Azure Quantum workspace was not linked to a storage\r\naccount at workspace creation time.\r\n- `credential=<CredentialType>`: The type of credentials to use to authenticate with Azure.\r\nNOTE: to authenticate we leverage the [Azure Identity library](https://docs.microsoft.com/dotnet/api/overview/azure/identity-readme), \r\nbased on this parameter we will create an instance of a Credential Class. \r\nPossible options are:\r\n  * [Environment](https://docs.microsoft.com/dotnet/api/azure.identity.environmentcredential):\r\n     Authenticates a service principal or user via credential information specified in environment variables.\r\n  * [ManagedIdentity](https://docs.microsoft.com/dotnet/api/azure.identity.managedidentitycredential):\r\n     Authenticates the managed identity of an azure resource.\r\n  * [CLI](https://docs.microsoft.com/dotnet/api/azure.identity.azureclicredential):\r\n     Authenticate in a development environment with the Azure CLI.\r\n  * [SharedToken](https://docs.microsoft.com/dotnet/api/azure.identity.sharedtokencachecredential):\r\n     Authenticate using tokens in the local cache shared between Microsoft applications.\r\n  * [VisualStudio](https://docs.microsoft.com/dotnet/api/azure.identity.visualstudiocredential):\r\n     Authenticate using data from Visual Studio.\r\n  * [VisualStudioCode](https://docs.microsoft.com/dotnet/api/azure.identity.visualstudiocodecredential):\r\n     Authenticate in a development environment with Visual Studio Code.\r\n  * [Interactive](https://docs.microsoft.com/dotnet/api/azure.identity.interactivebrowsercredential):\r\n     Opens a new browser window to interactively authenticate a user \r\n     and obtain an access token.\r\n  * [DeviceCode](https://docs.microsoft.com/dotnet/api/azure.identity.devicecodecredential):\r\n     Authenticates a user using the device code flow to obtain an access token.\r\nIf not provided, it will try each credential type in order and pick the first one that can\r\nsuccesfully authenticate with Azure.\r\n\r\n#### Possible errors\r\n\r\n- `WorkspaceNotFound`: No Azure Quantum workspace was found that matches the specified criteria.\r\n- `AuthenticationFailed`: Failed to authenticate to the specified Azure Quantum workspace.\r\n                    ", "Remarks": null, "Examples": ["\r\nConnect to an Azure Quantum workspace using its resource ID to the 'West Us' region:\r\n```\r\nIn []: %azure.connect \"/subscriptions/.../Microsoft.Quantum/Workspaces/WORKSPACE_NAME\" location=\"West US\"\r\nOut[]: Connected to Azure Quantum workspace WORKSPACE_NAME in location westus.\r\n        <list of Q# execution targets available in the Azure Quantum workspace>\r\n```\r\n                        ", "\r\nConnect to an Azure Quantum workspace using its resource ID, a storage account connection string, and a location:\r\n```\r\nIn []: %azure.connect resourceId=\"/subscriptions/.../Microsoft.Quantum/Workspaces/WORKSPACE_NAME\"\r\n                      storage=\"STORAGE_ACCOUNT_CONNECTION_STRING\"\r\n                      location=\"East US\"\r\nOut[]: Connected to Azure Quantum workspace WORKSPACE_NAME in location eastus.\r\n        <list of Q# execution targets available in the Azure Quantum workspace>\r\n```\r\n                        ", "\r\nConnect to an Azure Quantum workspace using individual subscription ID, resource group name, using a browser to prompt for user credentials with Azure:\r\n```\r\nIn []: %azure.connect subscription=\"SUBSCRIPTION_ID\"\r\n                      resourceGroup=\"RESOURCE_GROUP_NAME\"\r\n                      workspace=\"WORKSPACE_NAME\"\r\n                      location=\"West US\"\r\n                      credential=\"interactive\"\r\nOut[]: Connected to Azure Quantum workspace WORKSPACE_NAME in location westus.\r\n        <list of Q# execution targets available in the Azure Quantum workspace>\r\n```\r\n                        ", "\r\nPrint information about the currently-connected Azure Quantum workspace:\r\n```\r\nIn []: %azure.connect\r\nOut[]: Connected to Azure Quantum workspace WORKSPACE_NAME in location westus.\r\n        <list of Q# execution targets available in the Azure Quantum workspace>\r\n```\r\n                        "], "SeeAlso": null}, "AssemblyName": "Microsoft.Quantum.IQSharp.AzureClient"}
-->

# `%azure.connect`

## Summary

Connects to an Azure Quantum workspace or displays current connection status.

## Description

This magic command allows for connecting to an Azure Quantum workspace
as specified by the resource ID and location of the workspace or by a combination of
subscription ID, resource group name, workspace name, and location.

If the connection is successful, a list of the available Q# execution targets
in the Azure Quantum workspace will be displayed.

#### Required parameters

The Azure Quantum workspace can be identified by resource ID:

- `resourceId=<string>`: The resource ID of the Azure Quantum workspace.
This can be obtained from the workspace page in the Azure portal. The `resourceId=` prefix
is optional for this parameter, as long as the resource ID is valid.

Alternatively, it can be identified by subscription ID, resource group name, and workspace name:

- `subscription=<string>`: The Azure subscription ID for the Azure Quantum workspace.
- `resourceGroup=<string>`: The Azure resource group name for the Azure Quantum workspace.
- `workspace=<string>`: The name of the Azure Quantum workspace.

Along with the identifiers above, a valid location is required.

- `location=<string>`: The Azure region where the Azure Quantum workspace is provisioned.
This may be specified as a region name such as `"East US"` or a location name such as `"eastus"`.

#### Optional parameters

- `storage=<string>`: The connection string to the Azure storage
account. Required if the specified Azure Quantum workspace was not linked to a storage
account at workspace creation time.
- `credential=<CredentialType>`: The type of credentials to use to authenticate with Azure.
NOTE: to authenticate we leverage the [Azure Identity library](https://docs.microsoft.com/dotnet/api/overview/azure/identity-readme),
based on this parameter we will create an instance of a Credential Class.
Possible options are:
  * [Environment](https://docs.microsoft.com/dotnet/api/azure.identity.environmentcredential):
     Authenticates a service principal or user via credential information specified in environment variables.
  * [ManagedIdentity](https://docs.microsoft.com/dotnet/api/azure.identity.managedidentitycredential):
     Authenticates the managed identity of an azure resource.
  * [CLI](https://docs.microsoft.com/dotnet/api/azure.identity.azureclicredential):
     Authenticate in a development environment with the Azure CLI.
  * [SharedToken](https://docs.microsoft.com/dotnet/api/azure.identity.sharedtokencachecredential):
     Authenticate using tokens in the local cache shared between Microsoft applications.
  * [VisualStudio](https://docs.microsoft.com/dotnet/api/azure.identity.visualstudiocredential):
     Authenticate using data from Visual Studio.
  * [VisualStudioCode](https://docs.microsoft.com/dotnet/api/azure.identity.visualstudiocodecredential):
     Authenticate in a development environment with Visual Studio Code.
  * [Interactive](https://docs.microsoft.com/dotnet/api/azure.identity.interactivebrowsercredential):
     Opens a new browser window to interactively authenticate a user
     and obtain an access token.
  * [DeviceCode](https://docs.microsoft.com/dotnet/api/azure.identity.devicecodecredential):
     Authenticates a user using the device code flow to obtain an access token.
If not provided, it will try each credential type in order and pick the first one that can
succesfully authenticate with Azure.

#### Possible errors

- `WorkspaceNotFound`: No Azure Quantum workspace was found that matches the specified criteria.
- `AuthenticationFailed`: Failed to authenticate to the specified Azure Quantum workspace.

## Examples for `%azure.connect`

### Example 1

Connect to an Azure Quantum workspace using its resource ID to the 'West Us' region:
```
In []: %azure.connect "/subscriptions/.../Microsoft.Quantum/Workspaces/WORKSPACE_NAME" location="West US"
Out[]: Connected to Azure Quantum workspace WORKSPACE_NAME in location westus.
        <list of Q# execution targets available in the Azure Quantum workspace>
```

### Example 2

Connect to an Azure Quantum workspace using its resource ID, a storage account connection string, and a location:
```
In []: %azure.connect resourceId="/subscriptions/.../Microsoft.Quantum/Workspaces/WORKSPACE_NAME"
                      storage="STORAGE_ACCOUNT_CONNECTION_STRING"
                      location="East US"
Out[]: Connected to Azure Quantum workspace WORKSPACE_NAME in location eastus.
        <list of Q# execution targets available in the Azure Quantum workspace>
```

### Example 3

Connect to an Azure Quantum workspace using individual subscription ID, resource group name, using a browser to prompt for user credentials with Azure:
```
In []: %azure.connect subscription="SUBSCRIPTION_ID"
                      resourceGroup="RESOURCE_GROUP_NAME"
                      workspace="WORKSPACE_NAME"
                      location="West US"
                      credential="interactive"
Out[]: Connected to Azure Quantum workspace WORKSPACE_NAME in location westus.
        <list of Q# execution targets available in the Azure Quantum workspace>
```

### Example 4

Print information about the currently-connected Azure Quantum workspace:
```
In []: %azure.connect
Out[]: Connected to Azure Quantum workspace WORKSPACE_NAME in location westus.
        <list of Q# execution targets available in the Azure Quantum workspace>
```
