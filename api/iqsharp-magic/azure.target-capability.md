---
title: '%azure.target-capability (magic command)'
description: Sets or displays the active target capability level for compiling Q#
  functions and operations.
author: anjbur
uid: microsoft.quantum.iqsharp.magic-ref.azure.target-capability
ms.author: anburton
ms.date: 07/23/2022
ms.topic: managed-reference
---

<!--
    NB: This file has been automatically generated from Microsoft.Quantum.IQSharp.AzureClient.dll,
        please do not manually edit it.

    [DEBUG] JSON source:
        {"Name": "%azure.target-capability", "Documentation": {"Summary": "Sets or displays the active target capability level for compiling Q# functions and operations.", "Full": null, "Description": "\r\nThis magic command allows for specifying or displaying the active target capability level for Q# job submission\r\nin an Azure Quantum workspace.\r\n\r\n#### Optional parameters\r\n\r\n- The target ID to set as the active execution target for Q# job submission. If not specified,\r\nthe currently active execution target is displayed.\r\n                ", "Remarks": null, "Examples": ["\r\nSets the current target capability to full computation\r\n(no restrictions), if allowed by the current execution\r\ntarget.\r\n```\r\nIn []: %azure.target-capability FullComputation\r\n```\r\n                    ", "\r\nDisplays the current target capability level.\r\n```\r\nIn []: %azure.target-capability\r\n```\r\n                    ", "\r\nResets the current target capability level to either\r\nthe maximum supported by the current execution target,\r\nor to full computation if no execution target is\r\ncurrently set.\r\n```\r\nIn []: %azure.target-capability --clear\r\n```\r\n                    "], "SeeAlso": null}, "AssemblyName": "Microsoft.Quantum.IQSharp.AzureClient"}
-->

# `%azure.target-capability`

## Summary

Sets or displays the active target capability level for compiling Q# functions and operations.

## Description

This magic command allows for specifying or displaying the active target capability level for Q# job submission
in an Azure Quantum workspace.

#### Optional parameters

- The target ID to set as the active execution target for Q# job submission. If not specified,
the currently active execution target is displayed.

## Examples for `%azure.target-capability`

### Example 1

Sets the current target capability to full computation
(no restrictions), if allowed by the current execution
target.
```
In []: %azure.target-capability FullComputation
```

### Example 2

Displays the current target capability level.
```
In []: %azure.target-capability
```

### Example 3

Resets the current target capability level to either
the maximum supported by the current execution target,
or to full computation if no execution target is
currently set.
```
In []: %azure.target-capability --clear
```
