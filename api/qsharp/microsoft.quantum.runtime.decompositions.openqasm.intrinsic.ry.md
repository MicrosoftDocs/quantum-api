---
uid: Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic.Ry
title: Ry operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic
qsharp.name: Ry
qsharp.summary: >-
  In OpenQASM: `gate ry(theta) a { u3(theta,0,0) a; }`. Note that the controlled specialization is not supported,
  since OpenQASM does not support artibrary numbers of control qubits.
---

# Ry operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic](xref:Microsoft.Quantum.Runtime.Decompositions.OpenQASM.Intrinsic)

Package: [Microsoft.Quantum.Decompositions.OpenQASM](https://nuget.org/packages/Microsoft.Quantum.Decompositions.OpenQASM)


In OpenQASM: `gate ry(theta) a { u3(theta,0,0) a; }`. Note that the controlled specialization is not supported,since OpenQASM does not support artibrary numbers of control qubits.

```qsharp
operation Ry (theta : Double, qubit : Qubit) : Unit is Adj
```


## Input

### theta : [Double](xref:microsoft.quantum.lang-ref.double)




### qubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

