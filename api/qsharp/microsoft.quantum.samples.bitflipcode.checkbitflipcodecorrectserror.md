---
uid: Microsoft.Quantum.Samples.BitFlipCode.CheckBitFlipCodeCorrectsError
title: CheckBitFlipCodeCorrectsError operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.BitFlipCode
qsharp.name: CheckBitFlipCodeCorrectsError
qsharp.summary: >-
  This operation encodes into a bit-flip code, and confirms that
  it can correct a given error applied to the logical state
  that results from encoding R_x(π / 3) |0〉.
---

# CheckBitFlipCodeCorrectsError operation

Namespace: [Microsoft.Quantum.Samples.BitFlipCode](xref:Microsoft.Quantum.Samples.BitFlipCode)

Package: [BitFlipCode](https://nuget.org/packages/BitFlipCode)


This operation encodes into a bit-flip code, and confirms thatit can correct a given error applied to the logical statethat results from encoding R_x(π / 3) |0〉.

```qsharp
operation CheckBitFlipCodeCorrectsError (error : (Qubit[] => Unit)) : Unit
```


## Input

### error : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit) 

An operation representing an error to be applied to the codeblock.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

This operation will fail when the error correction step failsif run on a target machine which supports assertions, and thuscan be used as a unit test of error-correction functionality.