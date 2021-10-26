---
uid: Microsoft.Quantum.Intrinsic.CCNOT
title: CCNOT operation
ms.date: 10/22/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: CCNOT
qsharp.summary: Applies the doubly controlled–NOT (CCNOT) gate to three qubits.
---

# CCNOT operation

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.QSharp.Core](https://nuget.org/packages/Microsoft.Quantum.QSharp.Core)


Applies the doubly controlled–NOT (CCNOT) gate to three qubits.

```qsharp
operation CCNOT (control1 : Qubit, control2 : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Input

### control1 : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

First control qubit for the CCNOT gate.


### control2 : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Second control qubit for the CCNOT gate.


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Target qubit for the CCNOT gate.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Equivalent to:```qsharpControlled X([control1, control2], target);```