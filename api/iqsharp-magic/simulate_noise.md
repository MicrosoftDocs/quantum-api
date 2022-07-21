---
title: '%simulate_noise (magic command)'
description: Runs a given function or operation on the OpenSystemsSimulator target
  machine.
author: anjbur
uid: microsoft.quantum.iqsharp.magic-ref.simulate_noise
ms.author: anburton
ms.date: 07/21/2022
ms.topic: managed-reference
---

<!--
    NB: This file has been automatically generated from Microsoft.Quantum.IQSharp.Jupyter.dll,
        please do not manually edit it.

    [DEBUG] JSON source:
        {"Name": "%simulate_noise", "Documentation": {"Summary": "Runs a given function or operation on the OpenSystemsSimulator target machine.", "Full": null, "Description": "\r\nThis magic command allows executing a given function or operation\r\non the OpenSystemsSimulator target, simulating how that function or operation\r\nwill perform when run on noisy quantum hardware.\r\n\r\n#### See also\r\n\r\n- [`%config`](https://docs.microsoft.com/qsharp/api/iqsharp-magic/config)\r\n- [`%noise_model`](https://docs.microsoft.com/qsharp/api/iqsharp-magic/noise_model)\r\n\r\n#### Required parameters\r\n\r\n- Q# operation or function name. This must be the first parameter, and must be a valid Q# operation\r\nor function name that has been defined either in the notebook or in a Q# file in the same folder.\r\n- Arguments for the Q# operation or function must also be specified as `key=value` pairs.\r\n\r\n#### Remarks\r\n\r\nThe behavior of this magic command can be controlled through the `%noise_model` magic command,\r\nand the `opensim.nQubits` and `opensim.representation` configuration settings.\r\n            ", "Remarks": null, "Examples": ["\r\nSimulate a Q# operation defined as `operation MyOperation() : Result`:\r\n```\r\nIn []: %simulate_noise MyOperation\r\nOut[]: <return value of the operation>\r\n```\r\n                ", "\r\nSimulate a Q# operation defined as `operation MyOperation(a : Int, b : Int) : Result`:\r\n```\r\nIn []: %simulate_noise MyOperation a=5 b=10\r\nOut[]: <return value of the operation>\r\n```\r\n                "], "SeeAlso": null}, "AssemblyName": "Microsoft.Quantum.IQSharp.Jupyter"}
-->

# `%simulate_noise`

## Summary

Runs a given function or operation on the OpenSystemsSimulator target machine.

## Description

This magic command allows executing a given function or operation
on the OpenSystemsSimulator target, simulating how that function or operation
will perform when run on noisy quantum hardware.

#### See also

- [`%config`](https://docs.microsoft.com/qsharp/api/iqsharp-magic/config)
- [`%noise_model`](https://docs.microsoft.com/qsharp/api/iqsharp-magic/noise_model)

#### Required parameters

- Q# operation or function name. This must be the first parameter, and must be a valid Q# operation
or function name that has been defined either in the notebook or in a Q# file in the same folder.
- Arguments for the Q# operation or function must also be specified as `key=value` pairs.

#### Remarks

The behavior of this magic command can be controlled through the `%noise_model` magic command,
and the `opensim.nQubits` and `opensim.representation` configuration settings.

## Examples for `%simulate_noise`

### Example 1

Simulate a Q# operation defined as `operation MyOperation() : Result`:
```
In []: %simulate_noise MyOperation
Out[]: <return value of the operation>
```

### Example 2

Simulate a Q# operation defined as `operation MyOperation(a : Int, b : Int) : Result`:
```
In []: %simulate_noise MyOperation a=5 b=10
Out[]: <return value of the operation>
```
