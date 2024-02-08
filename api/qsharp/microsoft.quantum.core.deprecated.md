---
uid: Microsoft.Quantum.Core.Deprecated
title: Deprecated user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Core
qsharp.name: Deprecated
qsharp.summary: Compiler-recognized attribute used to mark a type or callable as deprecated.
---

# Deprecated user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Core](xref:Microsoft.Quantum.Core)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Compiler-recognized attribute used to mark a type or callable as deprecated.

```qsharp

@ Microsoft.Quantum.Core.Attribute()
newtype Deprecated = (NewName : String);
```



## Named Items

### NewName : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

The full name of the type or callable to use instead.Is set to the empty String if a type or callable has been deprecated without substitution.