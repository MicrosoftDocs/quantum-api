---
uid: Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic.CNOT
title: CNOT operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic
qsharp.name: CNOT
qsharp.summary: >-
  In OpenQASM: `gate cx c,t { CX c,t; }`. Note that the controlled specialization is not supported,
  since OpenQASM does not support artibrary numbers of control qubits.
---

# CNOT operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic](xref:Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic)

Package: [Microsoft.Quantum.Decompositions.OpenQASM](https://nuget.org/packages/Microsoft.Quantum.Decompositions.OpenQASM)


In OpenQASM: `gate cx c,t { CX c,t; }`. Note that the controlled specialization is not supported,since OpenQASM does not support artibrary numbers of control qubits.

```qsharp
operation CNOT (control : Qubit, target : Qubit) : Unit is Adj
```


## Input

### control : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

