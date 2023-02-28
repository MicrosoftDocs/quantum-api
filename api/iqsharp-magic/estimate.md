---
title: '%estimate (magic command)'
description: Runs a given function or operation on the ResourcesEstimator target machine.
author: anjbur
uid: microsoft.quantum.iqsharp.magic-ref.estimate
ms.author: anburton
ms.date: 02/28/2023
ms.topic: managed-reference
---

<!--
    NB: This file has been automatically generated from Microsoft.Quantum.IQSharp.Jupyter.dll,
        please do not manually edit it.

    [DEBUG] JSON source:
        {"Name": "%estimate", "Documentation": {"Summary": "Runs a given function or operation on the ResourcesEstimator target machine.", "Full": null, "Description": "\nThe ResourcesEstimator estimates statistics about how many resources the given\noperation needs for execution. The resources it calculates include:\n\n- Counts for each primitive operation\n- Depth (lower bound for the T-gate depth of the quantum circuit)\n- Width (lower bound for the maximum number of qubits used for the computation)\n\nSee the [ResourcesEstimator user guide](https://docs.microsoft.com/azure/quantum/user-guide/machines/resources-estimator) to learn more.\n\n#### Required parameters\n\n- Q# operation or function name. This must be the first parameter, and must be a valid Q# operation\nor function name that has been defined either in the notebook or in a Q# file in the same folder.\n- Arguments for the Q# operation or function must also be specified as `key=value` pairs.\n                ", "Remarks": "\n**QDK warning message**: \"The local Resources Estimator will be removed in March 2023.\nThe Resources Estimator is now available through Azure Quantum.\"\n\nThe `%estimate` magic command is deprecated. To compute physical and logical resource estimation\nand runtime, we recommend using the\n[Azure Quantum Resource Estimator](https://learn.microsoft.com/azure/quantum/intro-to-resource-estimation) tool.\n                ", "Examples": ["\nEstimate resources for a Q# operation defined as `operation MyOperation() : Result`:\n```\nIn []: %estimate MyOperation\nOut[]: Metric           Sum     \n       ---------------- ----\n       CNOT             0\n       QubitClifford    4\n       R                0\n       Measure          8\n       T                0\n       Depth            0\n       Width            4\n       BorrowedWidth    0\n```\n                    ", "\nEstimate resources for a Q# operation defined as `operation MyOperation(a : Int, b : Int) : Result`:\n```\nIn []: %estimate MyOperation a=5 b=10\nOut[]: Metric           Sum     \n       ---------------- ----\n       CNOT             0\n       QubitClifford    4\n       R                0\n       Measure          8\n       T                0\n       Depth            0\n       Width            4\n       BorrowedWidth    0\n```\n                    "], "SeeAlso": null}, "AssemblyName": "Microsoft.Quantum.IQSharp.Jupyter"}
-->

# `%estimate`

## Summary

Runs a given function or operation on the ResourcesEstimator target machine.

## Description

The ResourcesEstimator estimates statistics about how many resources the given
operation needs for execution. The resources it calculates include:

- Counts for each primitive operation
- Depth (lower bound for the T-gate depth of the quantum circuit)
- Width (lower bound for the maximum number of qubits used for the computation)

See the [ResourcesEstimator user guide](https://docs.microsoft.com/azure/quantum/user-guide/machines/resources-estimator) to learn more.

#### Required parameters

- Q# operation or function name. This must be the first parameter, and must be a valid Q# operation
or function name that has been defined either in the notebook or in a Q# file in the same folder.
- Arguments for the Q# operation or function must also be specified as `key=value` pairs.

## Remarks

**QDK warning message**: "The local Resources Estimator will be removed in March 2023.
The Resources Estimator is now available through Azure Quantum."

The `%estimate` magic command is deprecated. To compute physical and logical resource estimation
and runtime, we recommend using the
[Azure Quantum Resource Estimator](https://learn.microsoft.com/azure/quantum/intro-to-resource-estimation) tool.

## Examples for `%estimate`

### Example 1

Estimate resources for a Q# operation defined as `operation MyOperation() : Result`:
```
In []: %estimate MyOperation
Out[]: Metric           Sum
       ---------------- ----
       CNOT             0
       QubitClifford    4
       R                0
       Measure          8
       T                0
       Depth            0
       Width            4
       BorrowedWidth    0
```

### Example 2

Estimate resources for a Q# operation defined as `operation MyOperation(a : Int, b : Int) : Result`:
```
In []: %estimate MyOperation a=5 b=10
Out[]: Metric           Sum
       ---------------- ----
       CNOT             0
       QubitClifford    4
       R                0
       Measure          8
       T                0
       Depth            0
       Width            4
       BorrowedWidth    0
```
