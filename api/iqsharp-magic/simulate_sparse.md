---
title: '%simulate_sparse (magic command)'
description: Runs a given function or operation on the sparse simulator.
author: anjbur
uid: microsoft.quantum.iqsharp.magic-ref.simulate_sparse
ms.author: anburton
ms.date: 03/27/2022
ms.topic: managed-reference
---

<!--
    NB: This file has been automatically generated from Microsoft.Quantum.IQSharp.Jupyter.dll,
        please do not manually edit it.

    [DEBUG] JSON source:
        {"Name": "%simulate_sparse", "Documentation": {"Summary": "Runs a given function or operation on the sparse simulator.", "Full": null, "Description": "\r\nThis magic command allows executing a given function or operation on the sparse simulator, \r\nwhich performs a sparse simulation of the given function or operation\r\nand prints the resulting return value.\r\n\r\n#### Required parameters\r\n\r\n- Q# operation or function name. This must be the first parameter, and must be a valid Q# operation\r\nor function name that has been defined either in the notebook or in a Q# file in the same folder.\r\n- Arguments for the Q# operation or function must also be specified as `key=value` pairs.\r\n                ", "Remarks": null, "Examples": ["\r\nSimulate a Q# operation defined as `operation MyOperation() : Result`:\r\n```\r\nIn []: %simulate_sparse MyOperation\r\nOut[]: <return value of the operation>\r\n```\r\n                    ", "\r\nSimulate a Q# operation defined as `operation MyOperation(a : Int, b : Int) : Result`:\r\n```\r\nIn []: %simulate_sparse MyOperation a=5 b=10\r\nOut[]: <return value of the operation>\r\n```\r\n                    "], "SeeAlso": null}, "AssemblyName": "Microsoft.Quantum.IQSharp.Jupyter"}
-->

# `%simulate_sparse`

## Summary

Runs a given function or operation on the sparse simulator.

## Description

This magic command allows executing a given function or operation on the sparse simulator,
which performs a sparse simulation of the given function or operation
and prints the resulting return value.

#### Required parameters

- Q# operation or function name. This must be the first parameter, and must be a valid Q# operation
or function name that has been defined either in the notebook or in a Q# file in the same folder.
- Arguments for the Q# operation or function must also be specified as `key=value` pairs.

## Examples for `%simulate_sparse`

### Example 1

Simulate a Q# operation defined as `operation MyOperation() : Result`:
```
In []: %simulate_sparse MyOperation
Out[]: <return value of the operation>
```

### Example 2

Simulate a Q# operation defined as `operation MyOperation(a : Int, b : Int) : Result`:
```
In []: %simulate_sparse MyOperation a=5 b=10
Out[]: <return value of the operation>
```
