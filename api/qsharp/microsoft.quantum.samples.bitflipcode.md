---
uid: Microsoft.Quantum.Samples.BitFlipCode
title: Microsoft.Quantum.Samples.BitFlipCode namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Samples.BitFlipCode
qsharp.summary: ''
---

# Microsoft.Quantum.Samples.BitFlipCode namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[CheckBitFlipCodeCorrectsBitFlipErrors](xref:Microsoft.Quantum.Samples.BitFlipCode.CheckBitFlipCodeCorrectsBitFlipErrors) |For each single-qubit bit-flip error on three qubits, this operation encodes R_x(π / 3) |0〉 into the bit-flip code and asserts that the code protects against that error.
|[CheckBitFlipCodeCorrectsError](xref:Microsoft.Quantum.Samples.BitFlipCode.CheckBitFlipCodeCorrectsError) |This operation encodes into a bit-flip code, and confirms that it can correct a given error applied to the logical state that results from encoding R_x(π / 3) |0〉.
|[CheckBitFlipCodeStateParity](xref:Microsoft.Quantum.Samples.BitFlipCode.CheckBitFlipCodeStateParity) |This operation encodes into a bit-flip code, and confirms that the parity measurements Z₀Z₁ and Z₁Z₂ both return positive eigenvalues (that is, the Result value Zero) without disturbing the state that we are trying to protect.
|[CheckCanonBitFlipCodeCorrectsBitFlipErrors](xref:Microsoft.Quantum.Samples.BitFlipCode.CheckCanonBitFlipCodeCorrectsBitFlipErrors) |For each single-qubit bit-flip error on three qubits, this operation encodes R_x(π / 3) |0〉 into the bit-flip code and asserts that the code protects against that error.
|[CheckCodeCorrectsError](xref:Microsoft.Quantum.Samples.BitFlipCode.CheckCodeCorrectsError) |This operation encodes into an arbitrary code, and confirms that it can correct a given error applied to the logical state that results from encoding R_x(π / 3) |0〉.
|[EncodeIntoBitFlipCode](xref:Microsoft.Quantum.Samples.BitFlipCode.EncodeIntoBitFlipCode) |Given a qubit representing a state to be protected and two auxiliary qubits initially in the |0〉 state, encodes the state into the three-qubit bit-flip code.


<!-- /summaries -->
