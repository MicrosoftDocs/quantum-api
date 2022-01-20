---
uid: Microsoft.Quantum.Synthesis.Action1C
title: Action1C function
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Synthesis
qsharp.name: Action1C
qsharp.summary: >-
  Returns the action by conjugation of a single-qubit Clifford operator
  on a single-qubit Pauli operator.
---

# Action1C function

Namespace: [Microsoft.Quantum.Synthesis](xref:Microsoft.Quantum.Synthesis)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the action by conjugation of a single-qubit Clifford operatoron a single-qubit Pauli operator.

```qsharp
function Action1C (op : Microsoft.Quantum.Synthesis.SingleQubitClifford, pauli : Pauli) : Pauli
```


## Input

### op : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)

The single-qubit Clifford operator to conjugate by.


### pauli : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)





## Output : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)



## Example

Given `op` and `pauli`, the following are equivalent up to phase:```qsharpPauliAsSingleQubitClifford(Action1C(op, pauli));Times1C(op, Times1C(PauliAsSingleQubitClifford(pauli), Inverse1C(op)));```