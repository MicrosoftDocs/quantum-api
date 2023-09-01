---
uid: Microsoft.Quantum.Arithmetic.FixedPoint
title: FixedPoint user defined type
ms.date: 09/01/2023
ms.topic: managed-reference
ms.author: quantumdocwriters
description: >-
  Represents a register of qubits encoding a fixed-point number. Consists of an integer that is equal to the number of
  qubits to the left of the binary point, i.e., qubits of weight greater
  than or equal to 1, and a quantum register.
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: FixedPoint
qsharp.summary: >-
  Represents a register of qubits encoding a fixed-point number. Consists of an integer that is equal to the number of
  qubits to the left of the binary point, i.e., qubits of weight greater
  than or equal to 1, and a quantum register.
---

# FixedPoint user defined type

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Represents a register of qubits encoding a fixed-point number. Consists of an integer that is equal to the number ofqubits to the left of the binary point, i.e., qubits of weight greaterthan or equal to 1, and a quantum register.

```qsharp

newtype FixedPoint = (IntegerBits : Int, Register : Qubit[]);
```



## Named Items

### IntegerBits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)


### Register : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

