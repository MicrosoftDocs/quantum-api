---
title: '%qir (magic command)'
description: Compiles a given Q# entry point to QIR, saving the resulting QIR to a
  given file.
author: anjbur
uid: microsoft.quantum.iqsharp.magic-ref.qir
ms.author: anburton
ms.date: 07/23/2022
ms.topic: managed-reference
---

<!--
    NB: This file has been automatically generated from Microsoft.Quantum.IQSharp.Kernel.dll,
        please do not manually edit it.

    [DEBUG] JSON source:
        {"Name": "%qir", "Documentation": {"Summary": "Compiles a given Q# entry point to QIR, saving the resulting QIR to a given file.", "Full": null, "Description": "\r\nThis command takes the full name of a Q# entry point, and compiles the Q# from that entry point\r\ninto QIR. The resulting program is then executed, and the output of the program is displayed.\r\n\r\n#### Required parameters\r\n\r\n- Q# operation or function name. This must be the first parameter, and must be a valid Q# operation\r\nor function name that has been defined either in the notebook or in a Q# file in the same folder.\r\n- The file path for where to save the output QIR to, specified as `output=<file path>`.\r\n            ", "Remarks": null, "Examples": ["\r\nCompiles a Q# program to QIR starting at the entry point defined as\r\n`operation RunMain() : Result` and display the resulting LLVM IR:\r\n```\r\nIn []: %qir RunMain\r\n```\r\n                "], "SeeAlso": null}, "AssemblyName": "Microsoft.Quantum.IQSharp.Kernel"}
-->

# `%qir`

## Summary

Compiles a given Q# entry point to QIR, saving the resulting QIR to a given file.

## Description

This command takes the full name of a Q# entry point, and compiles the Q# from that entry point
into QIR. The resulting program is then executed, and the output of the program is displayed.

#### Required parameters

- Q# operation or function name. This must be the first parameter, and must be a valid Q# operation
or function name that has been defined either in the notebook or in a Q# file in the same folder.
- The file path for where to save the output QIR to, specified as `output=<file path>`.

## Examples for `%qir`

### Example 1

Compiles a Q# program to QIR starting at the entry point defined as
`operation RunMain() : Result` and display the resulting LLVM IR:
```
In []: %qir RunMain
```
