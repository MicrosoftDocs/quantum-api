---
uid: Microsoft.Quantum.Synthesis.ApplyUnitary
title: ApplyUnitary operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Synthesis
qsharp.name: ApplyUnitary
qsharp.summary: >-
  Applies gate defined by a 2ⁿ × 2ⁿ unitary matrix.

  Fails if matrix is not unitary, or has wrong size.
---

# ApplyUnitary operation

Namespace: [Microsoft.Quantum.Synthesis](xref:Microsoft.Quantum.Synthesis)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies gate defined by a 2ⁿ × 2ⁿ unitary matrix.Fails if matrix is not unitary, or has wrong size.

```qsharp
operation ApplyUnitary (unitary : Microsoft.Quantum.Math.Complex[][], qubits : Microsoft.Quantum.Arithmetic.LittleEndian) : Unit is Adj + Ctl
```


## Input

### unitary : [Complex](xref:Microsoft.Quantum.Math.Complex)[][]

A $2^n \times 2^n$ unitary matrix describing the operation.If the matrix is not unitary or not of suitable size, throws an exception.


### qubits : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian)

Qubits to which apply the operation - a little-endian register of length n.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Example

The following operation will be equivalent to applying the Hadamard gate to the given qubit:```qsharpopen Microsoft.Quantum.Arithmetic;open Microsoft.Quantum.Math;open Microsoft.Quantum.Synthesis;operation ApplyH (register : LittleEndian) : Unit is Adj + Ctl {    let matrix = [[Complex(Sqrt(0.5), 0.0), Complex(Sqrt(0.5), 0.0)],                  [Complex(Sqrt(0.5), 0.0), Complex(-Sqrt(0.5), 0.0)]];    ApplyUnitary(matrix, register);}```Note that this way of applying the Hadamard gate is more expensive than calling the gate directly.We recommend to use this operation only for unitaries that are not implemented as primitive gates.