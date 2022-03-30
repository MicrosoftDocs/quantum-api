---
uid: Microsoft.Quantum.Synthesis.Apply1C
title: Apply1C operation
ms.date: 3/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Synthesis
qsharp.name: Apply1C
qsharp.summary: >-
  Given a single-qubit Clifford operator, applies the corresponding operation
  to a single qubit.
---

# Apply1C operation

Namespace: [Microsoft.Quantum.Synthesis](xref:Microsoft.Quantum.Synthesis)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given a single-qubit Clifford operator, applies the corresponding operationto a single qubit.

```qsharp
operation Apply1C (op : Microsoft.Quantum.Synthesis.SingleQubitClifford, target : Qubit) : Unit is Adj + Ctl
```


## Input

### op : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)

The Clifford operator to be applied.


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

The qubit to which `op` is to be applied as an operation.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Example

The following are equivalent, as $ES\omega^5 = (HS^3\omega^3)S\omega^5= HS^4\omega^8 = H$:```qsharpApply1C(Identity1C() w/ E <- 1 w/ S <- 1 w/ Omega <- 5), q);```and```qsharpH(q);```