---
uid: Microsoft.Quantum.Targeting.RequiresCapability
title: RequiresCapability user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Targeting
qsharp.name: RequiresCapability
qsharp.summary: Compiler-recognized attribute used to mark a callable with its required target capabilities.
---

# RequiresCapability user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Targeting](xref:Microsoft.Quantum.Targeting)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Compiler-recognized attribute used to mark a callable with its required target capabilities.

```qsharp

@ Microsoft.Quantum.Core.Attribute()
newtype RequiresCapability = (ResultOpacity : String, ClassicalCompute : String, Reason : String);
```



## Named Items

### ResultOpacity : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)


### ClassicalCompute : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)


### Reason : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)



## Remarks

This attribute is used internally by the compiler and standard library. Its API is unstableand should not be used.