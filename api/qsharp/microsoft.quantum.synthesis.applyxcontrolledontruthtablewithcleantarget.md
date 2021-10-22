---
uid: Microsoft.Quantum.Synthesis.ApplyXControlledOnTruthTableWithCleanTarget
title: ApplyXControlledOnTruthTableWithCleanTarget operation
ms.date: 10/22/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Synthesis
qsharp.name: ApplyXControlledOnTruthTableWithCleanTarget
qsharp.summary: >-
  Applies the @"Microsoft.Quantum.Intrinsic.X" operation on `target`, if the Boolean function `func` evaluates
  to true for the classical assignment in `controlRegister`.
---

# ApplyXControlledOnTruthTableWithCleanTarget operation

Namespace: [Microsoft.Quantum.Synthesis](xref:Microsoft.Quantum.Synthesis)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies the @"Microsoft.Quantum.Intrinsic.X" operation on `target`, if the Boolean function `func` evaluatesto true for the classical assignment in `controlRegister`.

```qsharp
operation ApplyXControlledOnTruthTableWithCleanTarget (func : BigInt, controlRegister : Qubit[], target : Qubit) : Unit is Adj + Ctl
```


## Description

This operation implements a special case of @"Microsoft.Quantum.Synthesis.ApplyXControlledOnTruthTable",in which the target qubit is known to be in the $\ket{0}$ state.The implementation makes use of @"Microsoft.Quantum.Intrinsic.Cnot"and @"Microsoft.Quantum.Intrinsic.R1" gates.  The implementation of theadjoint operation is optimized and uses measurement-based uncomputation.

## Input

### func : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

Boolean truth table represented as big integer


### controlRegister : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Register of control qubits


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Target qubit (must be in $\ket{0}$ state)



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## See Also

- [Microsoft.Quantum.Synthesis.ApplyXControlledOnTruthTable](xref:Microsoft.Quantum.Synthesis.ApplyXControlledOnTruthTable)