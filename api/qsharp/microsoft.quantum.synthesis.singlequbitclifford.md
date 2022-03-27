---
uid: Microsoft.Quantum.Synthesis.SingleQubitClifford
title: SingleQubitClifford user defined type
ms.date: 3/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Synthesis
qsharp.name: SingleQubitClifford
qsharp.summary: An element of the single-qubit Clifford group.
---

# SingleQubitClifford user defined type

Namespace: [Microsoft.Quantum.Synthesis](xref:Microsoft.Quantum.Synthesis)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


An element of the single-qubit Clifford group.

```qsharp

newtype SingleQubitClifford = (E : Int, S : Int, X : Int, Omega : Int);
```



## Named Items

### E : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The power to which $E$ should be raised to generate this element.
### S : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The power to which $S$ should be raised to generate this element.
### X : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The power to which $X$ should be raised to generate this element.
### Omega : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The power to which $\omega$ should be raised to generate this element.

## Description

Each element is represented as as $E^{i} S^{j} X^{k} \omega^{\ell}$, where $\omega^8 = 1$ and where $E = H S^3 \omega^3$.

## Example

```Q#let identity = SingleQubitClifford((0, 0, 0, 0));let xClifford = SingleQubitClifford((0, 0, 1, 0));```

## References

- https://hackage.haskell.org/package/newsynth-0.4.0.0/docs/Quantum-Synthesis-Clifford.html