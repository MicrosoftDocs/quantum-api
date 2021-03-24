---
uid: Microsoft.Quantum.Samples.BitFlipCode.CheckBitFlipCodeStateParity
title: CheckBitFlipCodeStateParity operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.BitFlipCode
qsharp.name: CheckBitFlipCodeStateParity
qsharp.summary: >-
  This operation encodes into a bit-flip code, and confirms that
  the parity measurements Z₀Z₁ and Z₁Z₂ both return positive eigenvalues
  (that is, the Result value Zero) without disturbing the state that
  we are trying to protect.
---

# CheckBitFlipCodeStateParity operation

Namespace: [Microsoft.Quantum.Samples.BitFlipCode](xref:Microsoft.Quantum.Samples.BitFlipCode)

Package: [BitFlipCode](https://nuget.org/packages/BitFlipCode)


This operation encodes into a bit-flip code, and confirms thatthe parity measurements Z₀Z₁ and Z₁Z₂ both return positive eigenvalues(that is, the Result value Zero) without disturbing the state thatwe are trying to protect.

```qsharp
operation CheckBitFlipCodeStateParity () : Unit
```


## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

This operation will fail when the parity checks are incorrectif run on a target machine which supports assertions, and thuscan be used as a unit test of error-correction functionality.