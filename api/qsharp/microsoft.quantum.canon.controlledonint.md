---
uid: Microsoft.Quantum.Canon.ControlledOnInt
title: ControlledOnInt function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ControlledOnInt
qsharp.summary: >-
  Returns a unitary operator that applies an oracle on the target register
  if the control register state corresponds to a specified nonnegative integer.
---

# ControlledOnInt function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns a unitary operator that applies an oracle on the target registerif the control register state corresponds to a specified nonnegative integer.

```qsharp
function ControlledOnInt<'T> (numberState : Int, oracle : ('T => Unit is Adj + Ctl)) : ((Qubit[], 'T) => Unit is Adj + Ctl)
```


## Input

### numberState : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Nonnegative integer.


### oracle : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl

Unitary operator.



## Output : ([Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[],'T) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl

A unitary operator that applies `oracle` on the target register if thecontrol register state corresponds to the number state `numberState`.

## Type Parameters

### 'T



## Remarks

The value of `numberState` is interpreted using a little-endian encoding.