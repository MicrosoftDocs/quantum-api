---
uid: Microsoft.Quantum.Canon.DelayedCA
title: DelayedCA function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: DelayedCA
qsharp.summary: >-
  Returns an operation that applies
  given operation with given argument.
---

# DelayedCA function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns an operation that appliesgiven operation with given argument.

```qsharp
function DelayedCA<'T> (op : ('T => Unit is Ctl + Adj), arg : 'T) : (Unit => Unit is Ctl + Adj)
```


## Input

### op : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl

An operation to be applied as a result of applying return value


### arg : 'T

The input to which the operation `op` is applied.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl

A new operation which applies `op` with input `arg`

## Type Parameters

### 'T

The input type of the operation to be delayed.

## See Also

- [Microsoft.Quantum.Canon.Delayed](xref:Microsoft.Quantum.Canon.Delayed)
- [Microsoft.Quantum.Canon.Delay](xref:Microsoft.Quantum.Canon.Delay)