---
uid: Microsoft.Quantum.Samples.BitFlipCode.CheckCodeCorrectsError
title: CheckCodeCorrectsError operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.BitFlipCode
qsharp.name: CheckCodeCorrectsError
qsharp.summary: >-
  This operation encodes into an arbitrary code, and confirms that
  it can correct a given error applied to the logical state
  that results from encoding R_x(π / 3) |0〉.
---

# CheckCodeCorrectsError operation

Namespace: [Microsoft.Quantum.Samples.BitFlipCode](xref:Microsoft.Quantum.Samples.BitFlipCode)

Package: [BitFlipCode](https://nuget.org/packages/BitFlipCode)


This operation encodes into an arbitrary code, and confirms thatit can correct a given error applied to the logical statethat results from encoding R_x(π / 3) |0〉.

```qsharp
operation CheckCodeCorrectsError (code : Microsoft.Quantum.ErrorCorrection.QECC, nScratch : Int, fn : Microsoft.Quantum.ErrorCorrection.RecoveryFn, error : (Qubit[] => Unit)) : Unit
```


## Input

### code : [QECC](xref:Microsoft.Quantum.ErrorCorrection.QECC)




### nScratch : [Int](xref:microsoft.quantum.lang-ref.int)




### fn : [RecoveryFn](xref:Microsoft.Quantum.ErrorCorrection.RecoveryFn)




### error : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit) 

An operation representing an error to be applied to the codeblock.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

This operation will fail when the error correction step failsif run on a target machine which supports assertions, and thuscan be used as a unit test of error-correction functionality.