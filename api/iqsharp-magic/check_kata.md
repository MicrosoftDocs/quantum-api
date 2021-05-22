---
title: '%check_kata (magic command)'
description: Checks the reference implementation for a single kata's test.
author: anjbur
uid: microsoft.quantum.iqsharp.magic-ref.check_kata
ms.author: anburton
ms.date: 05/22/2021
ms.topic: managed-reference
---

<!--
    NB: This file has been automatically generated from Microsoft.Quantum.Katas.dll,
        please do not manually edit it.

    [DEBUG] JSON source:
        {"Name": "%check_kata", "Documentation": {"Summary": "Checks the reference implementation for a single kata's test.", "Full": null, "Description": "Substitutes the reference implementation for a single task into the cell, and reports whether the test passed successfully using the reference implementation.", "Remarks": null, "Examples": ["To check a test called `Test`:\n```\nIn []: %check_kata T101_StateFlip \n     : operation StateFlip (q : Qubit) : Unit is Adj + Ctl {\n           // The Pauli X gate will change the |0\u27e9 state to the |1\u27e9 state and vice versa.\n           // Type X(q);\n           // Then run the cell using Ctrl/\u2318+Enter.\n\n           // ...\n       }\nOut[]: Success!```\n"], "SeeAlso": null}, "AssemblyName": "Microsoft.Quantum.Katas"}
-->

# `%check_kata`

## Summary

Checks the reference implementation for a single kata's test.

## Description

Substitutes the reference implementation for a single task into the cell, and reports whether the test passed successfully using the reference implementation.

## Examples for `%check_kata`

### Example 1

To check a test called `Test`:
```
In []: %check_kata T101_StateFlip
     : operation StateFlip (q : Qubit) : Unit is Adj + Ctl {
           // The Pauli X gate will change the |0⟩ state to the |1⟩ state and vice versa.
           // Type X(q);
           // Then run the cell using Ctrl/⌘+Enter.

           // ...
       }
Out[]: Success!```
