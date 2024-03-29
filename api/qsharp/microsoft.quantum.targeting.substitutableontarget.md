---
uid: Microsoft.Quantum.Targeting.SubstitutableOnTarget
title: SubstitutableOnTarget user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Targeting
qsharp.name: SubstitutableOnTarget
qsharp.summary: Enables to substitute an operation with an alternative operation for a given target
---

# SubstitutableOnTarget user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Targeting](xref:Microsoft.Quantum.Targeting)

Package: [Microsoft.Quantum.AutoSubstitution](https://nuget.org/packages/Microsoft.Quantum.AutoSubstitution)


Enables to substitute an operation with an alternative operation for a given target

```qsharp

@ Microsoft.Quantum.Core.Attribute()
newtype SubstitutableOnTarget = (AlternativeOperation : String, TargetName : String);
```



## Named Items

### AlternativeOperation : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

Fully qualified name of alternative operation to substitute operation with.
### TargetName : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

One of `QuantumSimulator`, `ToffoliSimulator`, or a fully qualified nameof a custom target.