---
uid: Microsoft.Quantum.Synthesis.Inverse1C
title: Inverse1C function
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Synthesis
qsharp.name: Inverse1C
qsharp.summary: Returns the inverse of a single-qubit Clifford operators.
---

# Inverse1C function

Namespace: [Microsoft.Quantum.Synthesis](xref:Microsoft.Quantum.Synthesis)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the inverse of a single-qubit Clifford operators.

```qsharp
function Inverse1C (op : Microsoft.Quantum.Synthesis.SingleQubitClifford) : Microsoft.Quantum.Synthesis.SingleQubitClifford
```


## Input

### op : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)

The operator to be inverted.



## Output : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)

The inverse of `op`.

## Example

Suppose that `op` is a single-qubit Clifford operator.```qsharplet op = DrawRandomSingleQubitClifford();```Then, the following snippet applies the identity (aka no-op) operation:```qsharpApply1C(op, q);Apply1C(Inverse1C(op), q);```