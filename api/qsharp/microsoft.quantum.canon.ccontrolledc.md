---
uid: Microsoft.Quantum.Canon.CControlledC
title: CControlledC function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: CControlledC
qsharp.summary: >-
  Given an operation op, returns a new operation which
  applies the op if a classical control bit is true. If `false`, nothing happens.
  The modifier `C` indicates that the operation is controllable.
---

# CControlledC function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given an operation op, returns a new operation whichapplies the op if a classical control bit is true. If `false`, nothing happens.The modifier `C` indicates that the operation is controllable.

```qsharp
function CControlledC<'T> (op : ('T => Unit is Ctl)) : ((Bool, 'T) => Unit is Ctl)
```


## Input

### op : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Ctl

An operation to be conditionally applied.



## Output : ([Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals),'T) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Ctl

A new operation which is op if the classical control bit is true.

## Type Parameters

### 'T

The input type of the operation to be conditionally applied.

## See Also

- [Microsoft.Quantum.Canon.CControlled](xref:Microsoft.Quantum.Canon.CControlled)