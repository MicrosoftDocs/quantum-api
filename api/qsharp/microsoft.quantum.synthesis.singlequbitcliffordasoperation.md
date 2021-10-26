---
uid: Microsoft.Quantum.Synthesis.SingleQubitCliffordAsOperation
title: SingleQubitCliffordAsOperation function
ms.date: 10/22/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Synthesis
qsharp.name: SingleQubitCliffordAsOperation
qsharp.summary: >-
  Returns a representation of a single-qubit Clifford operator as an
  operation acting on a single qubit.
---

# SingleQubitCliffordAsOperation function

Namespace: [Microsoft.Quantum.Synthesis](xref:Microsoft.Quantum.Synthesis)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns a representation of a single-qubit Clifford operator as anoperation acting on a single qubit.

```qsharp
function SingleQubitCliffordAsOperation (clifford : Microsoft.Quantum.Synthesis.SingleQubitClifford) : (Qubit => Unit is Adj + Ctl)
```


## Input

### clifford : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)

The operator to be represented as an operation.



## Output : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl

An operation that applies the given Clifford operator to a singlequbit.

## Example

Suppose that `op` is a single-qubit Clifford operator, and that`q` is a single qubit:```qsharplet op = DrawRandomSingleQubitClifford();use q = Qubit();```Then, the following two lines are equivalent:```qsharpApply1C(op, q);SingleQubitCliffordAsOperation(op)(q);```

## See Also

- [Microsoft.Quantum.Synthesis.Apply1C](xref:Microsoft.Quantum.Synthesis.Apply1C)