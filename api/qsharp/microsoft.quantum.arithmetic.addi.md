---
uid: Microsoft.Quantum.Arithmetic.AddI
title: AddI operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: AddI
qsharp.summary: >-
  Automatically chooses between addition with
  carry and without, depending on the register size of `ys`.
---

# AddI operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Automatically chooses between addition withcarry and without, depending on the register size of `ys`.

```qsharp
operation AddI (xs : Microsoft.Quantum.Arithmetic.LittleEndian, ys : Microsoft.Quantum.Arithmetic.LittleEndian) : Unit is Adj + Ctl
```


## Input

### xs : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian)

$n$-bit addend.


### ys : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian)

Addend with at least $n$ qubits. Will hold the result.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

