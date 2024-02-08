---
uid: Microsoft.Quantum.Intrinsic.I
title: I operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: I
qsharp.summary: Performs the identity operation (no-op) on a single qubit.
---

# I operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type2.Core](https://nuget.org/packages/Microsoft.Quantum.Type2.Core)


Performs the identity operation (no-op) on a single qubit.

```qsharp
operation I (target : Qubit) : Unit is Adj + Ctl
```


## Input

### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

This is a no-op. It is provided for completeness and becausesometimes it is useful to call the identity in an algorithm or to pass it as a parameter.