---
uid: Microsoft.Quantum.Core.Inline
title: Inline user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Core
qsharp.name: Inline
qsharp.summary: >-
  Compiler-recognized attribute used during QIR emission to determine
  when callables should be inlined, if possible.
---

# Inline user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Core](xref:Microsoft.Quantum.Core)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Compiler-recognized attribute used during QIR emission to determinewhen callables should be inlined, if possible.

```qsharp

@ Microsoft.Quantum.Core.Attribute()
newtype Inline = (Unit);
```

