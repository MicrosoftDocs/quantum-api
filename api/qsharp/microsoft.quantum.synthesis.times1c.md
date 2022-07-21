---
uid: Microsoft.Quantum.Synthesis.Times1C
title: Times1C function
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Synthesis
qsharp.name: Times1C
qsharp.summary: Returns the product of two single-qubit Clifford operators.
---

# Times1C function

Namespace: [Microsoft.Quantum.Synthesis](xref:Microsoft.Quantum.Synthesis)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the product of two single-qubit Clifford operators.

```qsharp
function Times1C (left : Microsoft.Quantum.Synthesis.SingleQubitClifford, right : Microsoft.Quantum.Synthesis.SingleQubitClifford) : Microsoft.Quantum.Synthesis.SingleQubitClifford
```


## Input

### left : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)

The first operator to be multiplied.


### right : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)

The second operator to be multiplied.



## Output : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)

The product of `left` and `right`.

## Example

Suppose that `left` and `right` are both single-qubit Cliffordoperators.```qsharplet left = DrawRandomSingleQubitClifford();let right = DrawRandomSingleQubitClifford();```Then, the following two snippets are equivalent:```qsharpApply1C(right, q);Apply1C(left, q);```and:```qsharpApply1C(Times1C(left, right), q);```